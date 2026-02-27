import { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const LEFT_LINKS = [
  { label: 'About', href: 'about' },
  { label: 'Expertise', href: 'expertise' },
  { label: 'Experience', href: 'experience' },
];

const RIGHT_LINKS = [
  { label: 'Projects', href: 'projects' },
  { label: 'Certifications', href: 'certifications' },
  { label: 'Resume', href: 'resume' },
  { label: 'Contact', href: 'contact' },
];

const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    const sections = ALL_LINKS.map((link) => link.href);
    let current = '';

    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          current = sectionId;
        }
      }
    }

    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
    return () => {
      document.body.style.overflowY = '';
    };
  }, [mobileOpen]);

  const scrollToSection = (sectionId) => {
    setMobileOpen(false);
    document.body.style.overflowY = '';

    const el = document.getElementById(sectionId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderLink = (link) => (
    <li key={link.href}>
      <a
        href={`#${link.href}`}
        className={activeSection === link.href ? 'active' : ''}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(link.href);
        }}
      >
        {link.label}
      </a>
    </li>
  );

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-glow-line" />

        {/* Thin bar */}
        <div className="navbar-bar" />

        {/* Notch — logo + nav links expand from here */}
        <div className="navbar-notch">
          <svg
            className="notch-curve notch-curve-left"
            viewBox="0 0 100 44"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L100,0 L100,44 C40,44 0,18 0,0 Z" />
          </svg>
          <div className="notch-center">
            <ul className="navbar-links navbar-links-left">
              {LEFT_LINKS.map(renderLink)}
            </ul>
            <div className="navbar-logo-spacer" />
            <div
              className="navbar-logo"
              onClick={scrollToTop}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') scrollToTop();
              }}
            >
              ALA
            </div>
            <div className="navbar-logo-spacer" />
            <ul className="navbar-links navbar-links-right">
              {RIGHT_LINKS.map(renderLink)}
            </ul>
          </div>
          <svg
            className="notch-curve notch-curve-right"
            viewBox="0 0 100 44"
            preserveAspectRatio="none"
          >
            <path d="M100,0 L0,0 L0,44 C60,44 100,18 100,0 Z" />
          </svg>
        </div>

        <button
          className={`hamburger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {ALL_LINKS.map((link) => (
          <a
            key={link.href}
            href={`#${link.href}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.href);
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}

export default Navbar;
