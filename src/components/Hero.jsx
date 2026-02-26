import { useState, useEffect } from 'react';
import './Hero.css';

const TITLES = [
  'Software Architect',
  'CTO & Co-Founder',
  'Tech Lead \u2014 Backend & Microservices',
  'Multi-Cloud Engineer (AWS + Azure)',
  'Spring Certified Professional',
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPING = 2000;
const PAUSE_AFTER_DELETING = 500;

function Typewriter() {
  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_AFTER_TYPING);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, DELETING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % TITLES.length);
        }, PAUSE_AFTER_DELETING);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <div className="hero-title-wrapper">
      <p className="hero-title">
        {displayText}
        <span className="cursor" />
      </p>
    </div>
  );
}

function Hero() {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-aurora">
        <div className="hero-aurora-orb hero-aurora-orb-1" />
        <div className="hero-aurora-orb hero-aurora-orb-2" />
        <div className="hero-aurora-orb hero-aurora-orb-3" />
      </div>

      <div className="hero-content">
        <h1 className="hero-name">ALA BEN KHALIFA</h1>

        <Typewriter />

        <p className="hero-tagline">
          I design, build, and scale the cloud-native platforms behind
          world-class brands.
        </p>

        <div className="hero-buttons">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div
        className="scroll-indicator"
        onClick={() => scrollToSection('about')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') scrollToSection('about');
        }}
        aria-label="Scroll down"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
