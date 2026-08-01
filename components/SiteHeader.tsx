'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';

type NavLink = { name: string; href: string };

export default function SiteHeader({ navLinks }: { navLinks: NavLink[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="site-header"
      style={{ borderColor: scrolled ? 'var(--accent-dim)' : 'var(--line)' }}
    >
      <div className="container nav">
        <Link href="/" className="logo-text">
          Mohammed<span>.</span>dev
        </Link>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="nav-link">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-nav-wrapper">
          <button
            className={`mobile-menu-button ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className="menu-icon" />
            <span className="menu-icon" />
            <span className="menu-icon" />
          </button>

          <MobileMenu navLinks={navLinks} isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
        </div>
      </div>
    </header>
  );
}
