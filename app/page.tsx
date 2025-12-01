'use client'
import { useEffect, useState, useRef } from 'react';
import styles from './page.module.css';

const projects = [
  {
    name: 'Currency Converter',
    description: 'A currency conversion tool that provides real-time exchange rates with live rate updates, historical data, and responsive design.',
    repo_url: 'https://github.com/meko568/Currency-Converter',
    demo_url: 'https://meko568.github.io/Currency-Converter',
    technologies: ['CSS', 'JavaScript', 'Exchange Rate API'],
    updated_at: '2025-09-24',
  },
  {
    name: 'Weather App',
    description: 'Real-time weather application that displays current conditions and temperature with a clean, responsive interface.',
    repo_url: 'https://github.com/meko568/weather',
    demo_url: 'https://meko568.github.io/weather',
    technologies: ['TypeScript', 'Weather API', 'Responsive Design'],
    updated_at: '2025-09-17',
  },
  {
    name: 'Prayer Times',
    description: 'Islamic prayer times application showing daily prayer times based on location with monthly schedules and location detection.',
    repo_url: 'https://github.com/meko568/pray/',
    demo_url: 'https://meko568.github.io/pray/main',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Geolocation API'],
    updated_at: '2025-09-17',
  },
  {
    name: 'Number Guessing Game',
    description: 'A fun game where players try to guess a random number with score tracking and multiple difficulty levels.',
    repo_url: 'https://github.com/meko568/guess-thenumber-game',
    demo_url: 'https://meko568.github.io/guess-thenumber-game/main',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    updated_at: '2025-09-10',
  },
  {
    name: 'Hangman Game',
    description: 'Classic word guessing game with multiple categories, score tracking, and an intuitive interface.',
    repo_url: 'https://github.com/meko568/hangman-game/',
    demo_url: 'https://meko568.github.io/hangman-game/main',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    updated_at: '2025-09-05',
  },
  {
    name: 'Sudoku',
    description: 'Interactive Sudoku game with multiple difficulty levels, hints, and a responsive interface.',
    repo_url: 'https://github.com/meko568/sudoku',
    demo_url: 'https://meko568.github.io/sudoku',
    technologies: ['Vue.js', 'CSS', 'Game Logic'],
    updated_at: '2025-05-16',
  },
  {
    name: '3D Cube Animation',
    description: 'Interactive 3D cube animation using CSS 3D transforms with smooth animations and controls.',
    repo_url: 'https://github.com/meko568/cube',
    demo_url: 'https://meko568.github.io/cube/main',
    technologies: ['HTML', 'CSS', '3D Transforms'],
    updated_at: '2025-05-03',
  },
  {
    name: 'Memory Game',
    description: 'Challenging memory card matching game with multiple difficulty levels and score tracking.',
    repo_url: 'https://github.com/meko568/memory-game',
    demo_url: 'https://meko568.github.io/memory-game/main',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    updated_at: '2025-04-05',
  },
  {
    name: 'E-commerce Product Page',
    description: 'E-commerce product showcase page with product gallery, add to cart functionality, and responsive design.',
    repo_url: 'https://github.com/meko568/the-product',
    demo_url: 'https://meko568.github.io/the-product/main',
    technologies: ['JavaScript', 'CSS', 'Responsive Design'],
    updated_at: '2025-02-08',
  },
  {
    name: 'Countries Info',
    description: 'Country information application displaying country details, flags, and statistics in an interactive way.',
    repo_url: 'https://github.com/meko568/countries',
    demo_url: 'https://meko568.github.io/countries/main',
    technologies: ['CSS', 'JavaScript', 'REST Countries API'],
    updated_at: '2025-02-05',
  },
  {
    name: 'Credit Card Form',
    description: 'Credit card form with real-time validation, card type detection, and secure input formatting.',
    repo_url: 'https://github.com/meko568/credit',
    demo_url: 'https://meko568.github.io/credit/main',
    technologies: ['JavaScript', 'Form Validation', 'UX/UI'],
    updated_at: '2025-02-04',
  },
  {
    name: 'Chart Library',
    description: 'Interactive chart component with responsive design and add to cart functionality.',
    repo_url: 'https://github.com/meko568/chart',
    demo_url: 'https://meko568.github.io/chart/main',
    technologies: ['JavaScript', 'Responsive Design', 'E-commerce'],
    updated_at: '2025-02-01',
  },
  {
    name: 'CSS Grid Layout',
    description: 'Showcase of modern web design techniques using CSS Grid, featuring responsive layouts and creative solutions.',
    repo_url: 'https://github.com/meko568/grid-project',
    demo_url: 'https://meko568.github.io/grid-project/a grid',
    technologies: ['CSS Grid', 'Responsive Design', 'Modern Layouts'],
    updated_at: '2024-12-08',
  },
];

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Wait for DOM to be fully loaded
    const initObserver = () => {
      try {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
        
        observerRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const id = entry.target.id;
              if (entry.isIntersecting) {
                setVisibleSections((prev) => new Set(prev).add(id));
                
                if (id.startsWith('project-')) {
                  console.log('Project detected:', id);
                  const allProjects = document.querySelectorAll('[id^="project-"]');
                  console.log('Total projects found:', allProjects.length);
                  
                  allProjects.forEach(project => {
                    console.log('Removing styles from:', project.id);
                    const projectElement = project as HTMLElement;
                    // Remove all inline styles from other projects
                    projectElement.style.opacity = '0';
                    projectElement.style.visibility = 'visible';
                    projectElement.style.display = 'block';
                    projectElement.style.transform = 'translateY(20px) scale(0.98)';
                    projectElement.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                    projectElement.style.border = '2px solid #e5e7eb';
                    projectElement.style.background = 'white';
                    projectElement.style.color = '#1f2937';
                    projectElement.style.fontSize = '1rem';
                    projectElement.style.zIndex = '1';
                    projectElement.style.position = 'relative';
                    projectElement.classList.remove('animate');
                    
                    // Reset language tags to prevent dancing
                    const childElements = projectElement.querySelectorAll('*');
                    childElements.forEach(child => {
                      const childElement = child as HTMLElement;
                      if (childElement.classList.contains('techTag') || childElement.classList.contains('tag') || childElement.tagName === 'SPAN') {
                        childElement.style.transition = 'none';
                        childElement.style.animation = 'none';
                        childElement.style.transform = 'none';
                        childElement.style.transformStyle = 'flat';
                      }
                    });
                  });
                  
                  console.log('Adding styles to:', id);
                  const targetElement = entry.target as HTMLElement;
                  
                  // Apply all animation properties via inline styles
                  targetElement.style.opacity = '1';
                  targetElement.style.visibility = 'visible';
                  targetElement.style.display = 'block';
                  targetElement.style.transform = 'translateY(0) scale(1.05)';
                  targetElement.style.boxShadow = '0 10px 40px rgba(99, 102, 241, 0.3)';
                  targetElement.style.border = '3px solid #6366f1';
                  targetElement.style.background = 'linear-gradient(145deg, #ffffff, #f8fafc)';
                  targetElement.style.color = '#1f2937';
                  targetElement.style.fontSize = '1.1rem';
                  targetElement.style.zIndex = '10';
                  targetElement.style.position = 'relative';
                  targetElement.style.transition = 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
                  
                  // Also force child elements and prevent dancing animations
                  const childElements = targetElement.querySelectorAll('*');
                  childElements.forEach(child => {
                    const childElement = child as HTMLElement;
                    childElement.style.opacity = '1';
                    childElement.style.visibility = 'visible';
                    
                    // Add dancing animations to language tags
                    if (childElement.classList.contains('techTag') || childElement.classList.contains('tag') || childElement.tagName === 'SPAN') {
                      childElement.style.transition = 'all 0.3s ease';
                      childElement.style.animation = 'bounce 1s infinite, pulse 2s infinite';
                      childElement.style.transform = 'translateY(0)';
                      childElement.style.transformStyle = 'preserve-3d';
                      childElement.style.animationDelay = Math.random() * 2 + 's';
                    }
                  });
                  
                  // Add dancing animations to language/tech tags
                  const techTags = targetElement.querySelectorAll('.techTag, .tag, span[class*="tech"], span[class*="tag"]');
                  techTags.forEach((tag, index) => {
                    const tagElement = tag as HTMLElement;
                    tagElement.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                    tagElement.style.animation = `bounce 0.8s infinite alternate, wave ${1 + index * 0.1}s infinite`;
                    tagElement.style.transform = 'translateY(0) scale(1)';
                    tagElement.style.transformStyle = 'preserve-3d';
                    tagElement.style.animationDelay = `${index * 0.2}s`;
                    tagElement.style.willChange = 'transform';
                  });
                  
                  // Verify the class was added
                  setTimeout(() => {
                    console.log('Current classes:', entry.target.className);
                    console.log('Inline styles:', targetElement.style.cssText);
                    console.log('Project is now visible with red animation!');
                  }, 100);
                }
              }
            });
          },
          { threshold: 0.1 }
        );

        // Observe project cards
        const projectCards = document.querySelectorAll('[id^="project-"]');
        console.log('Found project cards:', projectCards.length);
        projectCards.forEach((card) => {
          if (observerRef.current && card) {
            observerRef.current.observe(card);
          }
        });

        // Observe sections
        const sections = document.querySelectorAll('.observe-section');
        console.log('Found sections:', sections.length);
        sections.forEach((section) => {
          if (observerRef.current && section) {
            observerRef.current.observe(section);
          }
        });
      } catch (error) {
        console.error('Intersection Observer setup failed:', error);
      }
    };

    // Delay initialization to avoid hot module replacement conflicts
    const timeoutId = setTimeout(initObserver, 500);

    // Combined scroll handler for parallax and header effects
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      // Parallax effect
      const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast') as NodeListOf<HTMLElement>;
      parallaxElements.forEach((el) => {
        const speed = el.classList.contains('parallax-slow') ? 0.5 : 
                      el.classList.contains('parallax-medium') ? 0.3 : 0.1;
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });
      
      // Header scroll effect
      const header = document.querySelector('.site-header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} animate-fade-in-up`}>
              Hi, I'm <span className="gradient-text">Mohammed Elbardan</span>
            </h1>
            <h2 className={`${styles.heroSubtitle} animate-slide-in-left animate-stagger-1`}>Frontend Developer</h2>
            <p className={`${styles.heroLead} typewriter`}>
              I build exceptional digital experiences with modern web technologies.
            </p>
            <div className={styles.ctaButtons}>
              <a href="#projects" className="btn btn-primary magnetic-btn hover-lift">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline magnetic-btn hover-lift">
                Contact Me
              </a>
            </div>
          </div>
        </div>
        
      </section>

      {/* About Section */}
      <section id="about" className={`section observe-section ${visibleSections.has('about') ? 'observe-visible' : 'observe-hidden'}`}>
        <div className="container">
          <h2 className={`section-title ${visibleSections.has('about') ? 'animate-rotate-in' : ''}`}>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className={`${visibleSections.has('about') ? 'slide-fade' : ''} ${visibleSections.has('about') ? 'visible' : ''}`}>
                Hello! I'm a passionate frontend developer with a love for creating beautiful, responsive, and user-friendly web applications. With expertise in modern JavaScript frameworks and a keen eye for design, I bring ideas to life in the browser.
              </p>
              <p className={`${visibleSections.has('about') ? 'slide-fade' : ''} ${visibleSections.has('about') ? 'visible' : ''}`}>
                When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying the great outdoors.
              </p>
              <div className={`${styles.skillsTags} ${visibleSections.has('about') ? 'animate-scale-in' : ''}`}>
                <span className="stagger-item hover-lift">JavaScript</span>
                <span className="stagger-item hover-lift">TypeScript</span>
                <span className="stagger-item hover-lift">React</span>
                <span className="stagger-item hover-lift">Git</span>
                <span className="stagger-item hover-lift">CSS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`section observe-section ${styles.bgLight} ${visibleSections.has('projects') ? 'observe-visible' : 'observe-hidden'}`}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${visibleSections.has('projects') ? 'animate-slide-in-left' : ''}`}>My Projects</h2>
          <div className={`${styles.projectsGrid} ${visibleSections.has('projects') ? 'animate-parallax' : ''}`}>
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`${styles.projectCard} hover-lift`}
                id={`project-${index}`}
              >
                <div className={styles.projectContent}>
                  <h3 className={`${styles.projectTitle} reveal`}>{project.name}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.techStack}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={`${styles.techTag} stagger-item`} style={{ animationDelay: `${i * 0.1}s` }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={styles.projectLinks}>
                    <a 
                      href={project.demo_url}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`${styles.projectLink} ${styles.primaryLink} magnetic-btn`}
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.repo_url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`${styles.projectLink} ${styles.secondaryLink}`}
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`section observe-section ${visibleSections.has('contact') ? 'observe-visible' : 'observe-hidden'}`}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${visibleSections.has('contact') ? 'animate-slide-in-right' : ''}`}>Get In Touch</h2>
          <div className={styles.contactContent}>
            <p className={`${styles.contactText} ${visibleSections.has('contact') ? 'slide-fade' : ''} ${visibleSections.has('contact') ? 'visible' : ''}`}>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll get back to you as soon as possible!
            </p>
            <a 
              href="mailto:mohammedelbardan82@gmail.com?subject=Let's Connect - From Your Portfolio"
              className={`${styles.contactBtn} ${visibleSections.has('contact') ? 'animate-scale-in' : ''} magnetic-btn hover-lift glow-pulse`}
              onClick={(e) => {
                try {
                  // Let the default mailto: behavior work first
                  return true;
                } catch (error) {
                  console.error('Error with mailto link:', error);
                  // Fallback to window.open if there's an error
                  e.preventDefault();
                  window.open('mailto:mohammedelbardan82@gmail.com?subject=Let\'s Connect - From Your Portfolio');
                  return false;
                }
              }}
            >
              Say Hello
            </a>
          </div>
        </div>
      </section>
      <style jsx>{`
        /* Hero Section */
        .hero {
          padding: 6rem 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .hero h1 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .hero h2 {
          font-size: 2rem;
          color: var(--text-light);
          margin-bottom: 1.5rem;
          font-weight: 400;
        }

        .lead {
          font-size: 1.25rem;
          max-width: 700px;
          margin: 0 auto 2.5rem;
          color: var(--text-light);
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 2rem;
        }

        /* About Section */
        .about-content {
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 2rem;
        }

        .skills-tags span {
          background-color: var(--bg-secondary);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
        }

        /* Projects Section */
        .bg-light {
          background-color: var(--bg-secondary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-top: 3rem;
        }

        .project-card {
          background: var(--bg-color);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .project-image {
          height: 200px;
          background-color: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
        }

        .project-details {
          padding: 1.5rem;
        }

        .project-details h3 {
          margin-bottom: 0.5rem;
        }

        .project-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .project-links a {
          font-size: 0.875rem;
          font-weight: 500;
        }

        /* Contact Section */
        .contact-content {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-content p {
          margin-bottom: 2rem;
          font-size: 1.125rem;
          line-height: 1.7;
        }

        /* Utilities */
        .gradient-text {
          background: linear-gradient(90deg, var(--primary-color), var(--primary-hover));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .section-title {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
          display: inline-block;
          left: 50%;
          transform: translateX(-50%);
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, var(--primary-color), var(--primary-hover));
          border-radius: 3px;
        }

        /* Responsive Design */
        @media (min-width: 768px) {
          .hero h1 {
            font-size: 4.5rem;
          }

          .hero h2 {
            font-size: 2.5rem;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </>
  );
}
