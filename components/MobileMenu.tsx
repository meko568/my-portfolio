'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface NavLink {
  name: string;
  href: string;
}

interface MobileMenuProps {
  navLinks: NavLink[];
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ navLinks, isOpen, onClose }: MobileMenuProps) {

  // Close menu when clicking outside or resizing to desktop
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        onClose();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('resize', handleResize);
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
          zIndex: 40,
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease'
        }}
      />
      
      {/* Mobile Menu Panel */}
      <div 
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: '72px',
          right: 0,
          width: '300px',
          maxWidth: '80vw',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.1)',
          zIndex: 50,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          borderRadius: '0 0 0 1rem'
        }}
      >
        <div className="mobile-menu-header" style={{
          padding: '1.5rem',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{
            margin: 0,
            fontSize: '1.25rem',
            fontWeight: '600',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Menu</h3>
        </div>
        
        <ul className="mobile-nav-links" style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {navLinks.map((link, index) => (
            <li 
              key={link.name}
              style={{
                borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
              }}
            >
              <Link 
                href={link.href}
                className="mobile-nav-link hover-lift"
                onClick={onClose}
                style={{
                  display: 'block',
                  padding: '1rem 1.5rem',
                  color: '#1f2937',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: isOpen ? `slideInRight 0.3s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <span style={{
                  position: 'relative',
                  zIndex: 1
                }}>{link.name}</span>
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                  transition: 'width 0.3s ease'
                }} />
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="mobile-menu-footer" style={{
          padding: '1.5rem',
          borderTop: '1px solid rgba(0, 0, 0, 0.1)',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center'
        }}>
          <a 
            href="https://github.com/meko568" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link hover-lift"
            style={{
              color: '#6b7280',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#6366f1'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
          <a 
            href="mailto:mohammedelbardan82@gmail.com"
            className="social-link hover-lift"
            style={{
              color: '#6b7280',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#6366f1'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
