'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavLink {
  name: string;
  href: string;
}

export default function MobileMenu({ navLinks }: { navLinks: NavLink[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside or resizing to desktop
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <button 
        className="mobile-menu-button" 
        aria-label="Toggle menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
      >
        <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></span>
      </button>
      
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
