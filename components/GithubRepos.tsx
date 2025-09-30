'use client';

import { useState, useEffect } from 'react';

// Helper function to format repository names
const formatRepoName = (name: string) => {
  return name
    .replace(/-/g, ' ')
    .replace(/(^|\s)\S/g, (l: string) => l.toUpperCase());
};

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  languages_url: string;  // URL to fetch languages
  stargazers_count: number;
  fork: boolean;
  topics: string[];
  private: boolean;
  languages?: Record<string, number>; // Will store all languages and their byte counts
}

// Add RGB value for primary color for the alpha channel in RGBA
const primaryRgb = '37, 99, 235'; // This should match your primary color in RGB

export default function GithubRepos({ username = 'your-github-username' }: { username?: string }) {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username || username === 'your-github-username') {
      setError('Please update the GitHub username in the page.tsx file');
      setLoading(false);
      return;
    }

    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log(`Fetching repositories for user: ${username}`);
        const headers: HeadersInit = {
          'Accept': 'application/vnd.github.v3+json',
          ...(process.env.NEXT_PUBLIC_GITHUB_TOKEN && {
            'Authorization': `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
          })
        };
        
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
          { 
            headers,
            next: { revalidate: 3600 } // Cache for 1 hour
          }
        );

        console.log('Response status:', response.status);

        if (response.status === 404) {
          throw new Error(`GitHub user '${username}' not found`);
        }

        if (response.status === 403) {
          // Handle rate limiting
          const rateLimitReset = response.headers.get('x-ratelimit-reset');
          const resetTime = rateLimitReset ? new Date(parseInt(rateLimitReset) * 1000).toLocaleTimeString() : 'soon';
          throw new Error(`GitHub API rate limit exceeded. Try again after ${resetTime}`);
        }

        if (!response.ok) {
          throw new Error(`Failed to fetch repositories: ${response.status} ${response.statusText}`);
        }

        let data = await response.json();
        console.log('Received repositories:', data);

        if (!Array.isArray(data)) {
          throw new Error('Unexpected response format from GitHub API');
        }

        // First, fetch languages for each repository
        const reposWithLanguages = await Promise.all(data.map(async repo => {
          try {
            const langResponse = await fetch(repo.languages_url);
            if (langResponse.ok) {
              const languages = await langResponse.json();
              return { ...repo, languages };
            }
          } catch (error) {
            console.error(`Error fetching languages for ${repo.name}:`, error);
          }
          return { ...repo, languages: {} };
        }));

        // Process repositories with their languages
        const processedRepos = reposWithLanguages
          // Filter out the portfolio repository
          .filter(repo => repo.name.toLowerCase() !== 'portfolio')
          .map(repo => {
          // Use the homepage URL from GitHub if available, otherwise use the default GitHub Pages URL
          const homepageUrl = repo.homepage || `https://meko568.github.io/${repo.name}`;
          
          console.log(`Repository: ${repo.name}`);
          console.log('Homepage URL:', homepageUrl);
          
          return {
            ...repo,
            homepage: homepageUrl
          };
        });

        console.log('Repositories with languages:', processedRepos);
        setRepos(processedRepos);
      } catch (err) {
        console.error('Error fetching repositories:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
        <p>Loading projects from GitHub...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 max-w-2xl mx-auto">
          <h3 className="text-red-700 dark:text-red-300 font-medium mb-2">Error Loading Projects</h3>
          <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Make sure the GitHub username is correct and the repository is not private.
          </p>
        </div>
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 dark:text-gray-400">
          No public repositories found for @{username}.
          {username === 'your-github-username' ? (
            <span className="block mt-2 text-sm">
              Please update the GitHub username in page.tsx
            </span>
          ) : null}
        </p>
      </div>
    );
  }

  return (
    <>
      <style jsx>{`
        :global(:root) {
          --primary-rgb: ${primaryRgb};
        }
      `}</style>
      <div className="projects-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="project-card">
            <div className="project-details">
              <h3>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-title"
                >
                  {formatRepoName(repo.name)}
                </a>
                <div className="repo-name" style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-light)',
                  fontWeight: 'normal',
                  marginTop: '0.25rem',
                  opacity: 0.8
                }}>
                  {repo.name}
                </div>
              </h3>
              <p>{repo.description || 'No description provided.'}</p>
              
              {/* Debug information - will be removed later */}
              <div className="debug-info" style={{ fontSize: '0.8rem', color: '#666', margin: '0.5rem 0' }}>
                <div>Homepage: {repo.homepage || 'Not set'}</div>
                <div>Has homepage: {repo.homepage ? 'Yes' : 'No'}</div>
              </div>
              
              <div className="project-meta">
                {repo.language && (
                  <span className="language-tag">
                    {repo.language}
                  </span>
                )} 
                <div className="project-links">
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span>Code</span>
                  </a>
                  
                  {repo.homepage && (
                    <a 
                      href={repo.homepage.startsWith('http') ? repo.homepage : `https://${repo.homepage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .project-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .project-links a {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(var(--primary-rgb), 0.1);
          border-radius: var(--radius-md);
          color: var(--primary-color);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }
        
        .project-links a:hover {
          background: rgba(var(--primary-rgb), 0.2);
          transform: translateY(-1px);
        }
        
        .project-links svg {
          width: 1rem;
          height: 1rem;
        }
        
        .project-title {
          color: var(--text-color);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .project-title:hover {
          color: var(--primary-color);
        }
        
        .project-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 1rem;
        }
        
        @media (max-width: 640px) {
          .project-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
}
