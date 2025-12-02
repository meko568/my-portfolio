'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import MobileMenu from '@/components/MobileMenu';
import './globals.css';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle localStorage and initial dark mode setup
  useEffect(() => {
    setMounted(true);
    
    // Check localStorage for saved preference
    const saved = localStorage.getItem('darkMode');
    const darkMode = saved ? JSON.parse(saved) : false;
    setIsDarkMode(darkMode);
    
    // Apply dark mode classes
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
      document.body.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.body.classList.remove('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    }
    
    // Apply dark mode classes
    if (newDarkMode) {
      document.documentElement.classList.add('dark-mode');
      document.body.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.body.classList.remove('dark-mode');
    }
  };


  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className={`site-header ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="container">
            <nav className="nav">
              <Link href="/" className="logo hover-lift">
                <span className="logo-text">Mohammed Elbardan</span>
              </Link>
              
              
              <ul className="nav-links">
                {navLinks.map((link, index) => (
                  <li key={link.name} className={`nav-item ${scrolled ? 'animate-fade-in-down' : 'animate-fade-in-up'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <Link href={link.href} className="nav-link hover-lift">
                      <span className="nav-text">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mobile-nav-wrapper">
                <button 
                  className={`mobile-menu-button ${mobileMenuOpen ? 'open' : ''}`}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <span className="menu-icon"></span>
                  <span className="menu-icon"></span>
                  <span className="menu-icon"></span>
                </button>
                <MobileMenu navLinks={navLinks} isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
              </div>
            </nav>
          </div>
        </header>

        {/* Dark Mode Toggle - positioned after header */}
        {mounted && (
          <button
            className="dark-mode-toggle hover-lift"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
            <svg className="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg className="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
          </button>
        )}

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container">
            <div className="social-links">
              <a 
                href="https://github.com/meko568" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="social-link hover-lift animate-fade-in-up"
                style={{ animationDelay: '0.1s' }}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <a 
                href="mailto:mohammedelbardan82@gmail.com" 
                aria-label="Email"
                className="social-link hover-lift animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/mohammedelbardan" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="social-link hover-lift animate-fade-in-up"
                style={{ animationDelay: '0.3s' }}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            <p className="copyright animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              © {new Date().getFullYear()} Mohammed Elbardan. All rights reserved.
            </p>
      {/* Dark Mode Toggle */}
      {mounted && (
        <button
          className="dark-mode-toggle hover-lift"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
          <svg className="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        ) : (
          <svg className="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        )}
        </button>
      )}
          </div>
        </footer>
      </body>
    </html>
  );
}