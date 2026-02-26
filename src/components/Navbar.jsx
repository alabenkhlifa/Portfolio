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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
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

        <div className="navbar-body">
          <div className="navbar-inner">
            <ul className="navbar-links navbar-links-left">
              {LEFT_LINKS.map(renderLink)}
            </ul>

            <div
              className="navbar-logo"
              onClick={scrollToTop}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') scrollToTop();
              }}
            >
              ABK
            </div>

            <ul className="navbar-links navbar-links-right">
              {RIGHT_LINKS.map(renderLink)}
            </ul>

            <button
              className={`hamburger${mobileOpen ? ' open' : ''}`}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <svg
          className="navbar-wave"
          viewBox="0 0 1440 50"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 L620,0 Q620,50 660,50 L780,50 Q820,50 820,0 L1440,0 Z" />
        </svg>
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
