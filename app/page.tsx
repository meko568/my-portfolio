'use client'
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
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Hi, I'm <span className="gradient-text">Mohammed Elbardan</span></h1>
            <h2 className={styles.heroSubtitle}>Frontend Developer</h2>
            <p className={styles.heroLead}>I build exceptional digital experiences with modern web technologies.</p>
            <div className="cta-buttons">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Hello! I'm a passionate frontend developer with a love for creating beautiful, responsive, and user-friendly web applications. With expertise in modern JavaScript frameworks and a keen eye for design, I bring ideas to life in the browser.</p>
              <p>When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying the great outdoors.</p>
              <div className={styles.skillsTags}>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>React</span>
                <span>Git</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`section ${styles.bgLight}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>My Projects</h2>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.name}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.techStack}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={styles.projectLinks}>
                    <a 
                      href={project.demo_url}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`${styles.projectLink} ${styles.primaryLink}`}
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
      <section id="contact" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <div className={styles.contactContent}>
            <p className={styles.contactText}>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll get back to you as soon as possible!
            </p>
            <a 
              href="mailto:mohammedelbardan82@gmail.com?subject=Let's Connect - From Your Portfolio"
              className={styles.contactBtn}
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
