'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';

type Project = {
  name: string;
  description: string;
  repo_url: string;
  backend_repo_url?: string;
  demo_url?: string;
  technologies: string[];
};

const projectGroups: { label: string; projects: Project[] }[] = [
  {
    label: 'Full-stack systems',
    projects: [
      {
        name: 'Educational Management System',
        description:
          'Multi-role platform for schools to manage students, classes, and records end to end.',
        repo_url: 'https://github.com/meko568/educational-management-system',
        demo_url: 'https://educational-management-system-five.vercel.app',
        technologies: ['Laravel', 'Blade', 'MySQL'],
      },
      {
        name: 'Finance Tracker',
        description:
          'Personal finance app for logging transactions and visualizing spending, with a separate API backend.',
        repo_url: 'https://github.com/meko568/financeTrackingFrontend',
        backend_repo_url: 'https://github.com/meko568/financeTrackingBackend',
        demo_url: 'https://finance-tracking-frontend-three.vercel.app',
        technologies: ['Next.js', 'TypeScript', 'PHP API'],
      },
      {
        name: 'E-commerce Platform',
        description:
          'Storefront and product catalog backed by a dedicated commerce API for orders and inventory.',
        repo_url: 'https://github.com/meko568/e-commerce-frontend',
        backend_repo_url: 'https://github.com/meko568/commerceBackend',
        demo_url: 'https://e-commerce-frontend-livid-nine.vercel.app',
        technologies: ['Next.js', 'TypeScript', 'PHP API'],
      },
      {
        name: 'Drift / Store',
        description: 'E-commerce experiment focused on a fast, minimal checkout flow.',
        repo_url: 'https://github.com/meko568/store',
        demo_url: 'https://drift2-psi.vercel.app',
        technologies: ['Next.js', 'TypeScript'],
      },
    ],
  },
  {
    label: 'Mobile & web apps',
    projects: [
      {
        name: 'Islamic Prayer Companion',
        description:
          'Cross-platform mobile app for prayer times and schedules based on the user\u2019s location.',
        repo_url: 'https://github.com/meko568/islamic_app',
        technologies: ['Flutter', 'Dart'],
      },
      {
        name: 'Prayer Times (Web)',
        description:
          'Web version showing daily and monthly prayer schedules with automatic location detection.',
        repo_url: 'https://github.com/meko568/pray',
        demo_url: 'https://meko568.github.io/pray/main',
        technologies: ['JavaScript', 'Geolocation API'],
      },
      {
        name: 'Domain Search',
        description: 'Tool for checking domain name availability across extensions.',
        repo_url: 'https://github.com/meko568/DomainSearch',
        demo_url: 'https://domainsearch-sandy.vercel.app',
        technologies: ['Next.js', 'TypeScript'],
      },
      {
        name: 'Bright Caribbean',
        description: 'Marketing site built around a clean, content-first layout.',
        repo_url: 'https://github.com/meko568/BrightCaribbean',
        demo_url: 'https://brightcaribbean.vercel.app',
        technologies: ['HTML', 'CSS', 'JavaScript'],
      },
    ],
  },
];

const skills = {
  Frontend: ['Next.js / React', 'TypeScript', 'Vue.js', 'Tailwind CSS'],
  Backend: ['Laravel', 'PHP', 'REST APIs', 'MySQL'],
  Mobile: ['Flutter', 'Dart'],
  Tooling: ['Git', 'Vercel', 'Linux'],
};

export default function Home() {
  const [visible, setVisible] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('[data-observe]').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const isVisible = (id: string) => visible.has(id);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <span className="eyebrow">Full-stack developer</span>
              <h1 className={styles.heroTitle}>
                Hi, I&apos;m <span className={styles.accent}>Mohammed Elbardan</span>
              </h1>
              <p className={styles.heroLead}>
                I build complete web and mobile systems &mdash; from Laravel and PHP
                APIs on the backend, to Next.js and Flutter interfaces on the front.
              </p>
              <div className={styles.ctaRow}>
                <a href="#projects" className="btn btn-primary">
                  View projects
                </a>
                <a href="#contact" className="btn btn-outline">
                  Get in touch
                </a>
              </div>
            </div>

            <div className={styles.stackDiagram}>
              <div className={styles.stackLayer}>
                <span className={styles.stackLayerLabel}>01 &mdash; INTERFACE</span>
                <span className={styles.stackLayerName}>Frontend</span>
                <span className={styles.stackLayerTech}>Next.js / TS / Vue</span>
              </div>
              <div className={styles.stackLayer}>
                <span className={styles.stackLayerLabel}>02 &mdash; SERVICE</span>
                <span className={styles.stackLayerName}>Backend</span>
                <span className={styles.stackLayerTech}>Laravel / PHP</span>
              </div>
              <div className={styles.stackLayer}>
                <span className={styles.stackLayerLabel}>03 &mdash; DATA</span>
                <span className={styles.stackLayerName}>Storage</span>
                <span className={styles.stackLayerTech}>MySQL</span>
              </div>
              <div className={styles.stackLayer}>
                <span className={styles.stackLayerLabel}>04 &mdash; DEVICE</span>
                <span className={styles.stackLayerName}>Mobile</span>
                <span className={styles.stackLayerTech}>Flutter / Dart</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        data-observe
        className={`${styles.section} ${isVisible('about') ? styles.sectionVisible : ''}`}
      >
        <div className="container">
          <span className="eyebrow">About</span>
          <div className={styles.aboutGrid} style={{ marginTop: '1.5rem' }}>
            <div className={styles.aboutText}>
              <p>
                I&apos;m a full-stack developer who likes owning a feature end to
                end: designing the API, modeling the data, and building the
                interface people actually touch.
              </p>
              <p>
                Most of my recent work pairs a Laravel or PHP backend with a
                Next.js or TypeScript frontend, alongside Flutter for mobile.
                I care about projects that are simple to reason about and easy
                to hand off.
              </p>
            </div>
            <div id="skills" className={styles.skillCols}>
              {Object.entries(skills).map(([col, items]) => (
                <div key={col} className={styles.skillCol}>
                  <h4>{col}</h4>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        data-observe
        className={`${styles.section} ${isVisible('projects') ? styles.sectionVisible : ''}`}
      >
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Selected projects</h2>
            <span className="eyebrow">meko568</span>
          </div>

          {projectGroups.map((group) => (
            <div className={styles.projectGroup} key={group.label}>
              <span className={styles.groupLabel}>{group.label}</span>
              <div className={styles.projectsGrid}>
                {group.projects.map((project, i) => (
                  <div className={styles.projectCard} key={project.name}>
                    <div className={styles.projectTop}>
                      <h3 className={styles.projectName}>{project.name}</h3>
                      <span className={styles.projectId}>
                        SYS-{String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className={styles.projectDesc}>{project.description}</p>
                    <div className={styles.techRow}>
                      {project.technologies.map((t) => (
                        <span className={styles.techTag} key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className={styles.projectLinks}>
                      {project.demo_url && (
                        <a
                          href={project.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          Live demo
                        </a>
                      )}
                      <a
                        href={project.repo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        {project.backend_repo_url ? 'Frontend repo' : 'View code'}
                      </a>
                      {project.backend_repo_url && (
                        <a
                          href={project.backend_repo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          Backend repo
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <a
            href="https://github.com/meko568?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.moreLink}
          >
            View all repositories on GitHub &rarr;
          </a>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        data-observe
        className={`${styles.section} ${isVisible('contact') ? styles.sectionVisible : ''}`}
      >
        <div className="container">
          <div className={styles.contactInner}>
            <span className="eyebrow">Contact</span>
            <h2 className={styles.sectionTitle} style={{ margin: '1rem 0' }}>
              Let&apos;s build something
            </h2>
            <p className={styles.contactText}>
              Open to new opportunities and interesting problems. The fastest
              way to reach me is email.
            </p>
            <a
              href="mailto:mohammedelbardan82@gmail.com?subject=Let's%20Connect%20-%20From%20Your%20Portfolio"
              className="btn btn-primary"
            >
              Say hello
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
