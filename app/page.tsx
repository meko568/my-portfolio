'use client';
import { motion, Variants, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, MouseEvent } from 'react';
import styles from './page.module.css';

function MagneticButton({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.a>
  );
}

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

const stackLayers = [
  { tag: '01 \u2014 INTERFACE', name: 'Frontend', tech: 'Next.js / TS / Vue' },
  { tag: '02 \u2014 SERVICE', name: 'Backend', tech: 'Laravel / PHP' },
  { tag: '03 \u2014 DATA', name: 'Storage', tech: 'MySQL' },
  { tag: '04 \u2014 DEVICE', name: 'Mobile', tech: 'Flutter / Dart' },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: EASE },
  }),
};

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const groupVariant: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

function ProjectGrid({ projects }: { projects: Project[] }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <motion.div
      className={styles.projectsGrid}
      variants={groupVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      onMouseLeave={() => setHoveredIdx(null)}
    >
      {projects.map((project, i) => (
        <motion.div
          className={styles.projectCard}
          key={project.name}
          variants={cardVariant}
          onMouseEnter={() => setHoveredIdx(i)}
          animate={{
            opacity: hoveredIdx === null || hoveredIdx === i ? 1 : 0.45,
            scale: hoveredIdx === i ? 1.02 : 1,
          }}
          whileHover={{ y: -6, borderColor: 'var(--accent-dim)' }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        >
          <div className={styles.projectTop}>
            <h3 className={styles.projectName}>{project.name}</h3>
            <span className={styles.projectId}>SYS-{String(i + 1).padStart(2, '0')}</span>
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
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  const handleHeroMove = (e: MouseEvent<HTMLElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    heroRef.current?.style.setProperty('--mx', `${x}%`);
    heroRef.current?.style.setProperty('--my', `${y}%`);
  };

  return (
    <>
      {/* Hero */}
      <section className={styles.hero} ref={heroRef} onMouseMove={handleHeroMove}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <motion.span
                className="eyebrow"
                initial="hidden"
                animate="visible"
                custom={0}
                variants={fadeUp}
              >
                Full-stack developer
              </motion.span>

              <motion.h1
                className={styles.heroTitle}
                initial="hidden"
                animate="visible"
                custom={1}
                variants={fadeUp}
              >
                Hi, I&apos;m <span className={styles.accent}>Mohammed Elbardan</span>
              </motion.h1>

              <motion.p
                className={styles.heroLead}
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeUp}
              >
                I build complete web and mobile systems &mdash; from Laravel and PHP
                APIs on the backend, to Next.js and Flutter interfaces on the front.
              </motion.p>

              <motion.div
                className={styles.ctaRow}
                initial="hidden"
                animate="visible"
                custom={3}
                variants={fadeUp}
              >
                <MagneticButton href="#projects" className="btn btn-primary">
                  View projects
                </MagneticButton>
                <MagneticButton href="#contact" className="btn btn-outline">
                  Get in touch
                </MagneticButton>
              </motion.div>
            </div>

            <motion.div
              className={styles.stackDiagram}
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}
            >
              {stackLayers.map((layer) => (
                <motion.div
                  className={styles.stackLayer}
                  key={layer.name}
                  variants={{
                    hidden: { opacity: 0, x: 24 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
                  }}
                  whileHover={{ x: -4, borderColor: 'var(--accent-dim)' }}
                >
                  <span className={styles.stackLayerLabel}>{layer.tag}</span>
                  <span className={styles.stackLayerName}>{layer.name}</span>
                  <span className={styles.stackLayerTech}>{layer.tech}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <motion.section
        id="about"
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
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
            <motion.div
              id="skills"
              className={styles.skillCols}
              variants={groupVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {Object.entries(skills).map(([col, items]) => (
                <motion.div className={styles.skillCol} key={col} variants={cardVariant}>
                  <h4>{col}</h4>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariant}
      >
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Selected projects</h2>
            <span className="eyebrow">meko568</span>
          </div>

          {projectGroups.map((group) => (
            <div className={styles.projectGroup} key={group.label}>
              <span className={styles.groupLabel}>{group.label}</span>
              <ProjectGrid projects={group.projects} />
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
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
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
            <MagneticButton
              href="mailto:mohammedelbardan82@gmail.com?subject=Let's%20Connect%20-%20From%20Your%20Portfolio"
              className="btn btn-primary"
            >
              Say hello
            </MagneticButton>
          </div>
        </div>
      </motion.section>
    </>
  );
}
