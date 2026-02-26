import { SiLinkedin, SiGithub } from 'react-icons/si';
import { HiEnvelope } from 'react-icons/hi2';
import './Footer.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    icon: <SiLinkedin />,
    href: 'https://linkedin.com/in/ala-ben-khlifa',
    label: 'LinkedIn',
  },
  {
    icon: <SiGithub />,
    href: 'https://github.com/alabenkhlifa',
    label: 'GitHub',
  },
  {
    icon: <HiEnvelope />,
    href: 'mailto:ala.khliifa@gmail.com',
    label: 'Email',
  },
];

export default function Footer() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">ALA</span>
            <p className="footer-tagline">
              Software Architect & Tech Lead
            </p>
          </div>

          <nav className="footer-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-socials">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                className="footer-social-link"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ala Ben Khalifa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
