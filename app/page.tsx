'use client'
import GithubRepos from '@/components/GithubRepos';
import styles from './page.module.css';

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
      <section id="projects" className="section bg-light">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <GithubRepos username="meko568" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className={styles.contactContent}>
            <p className={styles.contactText}>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!</p>
            <button 
              onClick={(e) => {
                e.preventDefault();
                console.log('Button clicked');
                try {
                  window.open('mailto:mohammedelbardan82@gmail.com?subject=Let\'s Connect - From Your Portfolio', '_blank');
                } catch (error) {
                  console.error('Error opening email client:', error);
                  // Fallback to a new tab with a contact form or direct email link
                  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=mohammedelbardan82@gmail.com&su=Let\'s Connect - From Your Portfolio', '_blank');
                }
              }}
              className={styles.contactBtn}
              type="button"
            >
              Say Hello
            </button>
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
