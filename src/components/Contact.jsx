import { useInView } from 'react-intersection-observer';
import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import './Contact.css';

const contactLinks = [
  {
    icon: <HiEnvelope />,
    label: 'Email',
    value: 'ala.khliifa@gmail.com',
    href: 'mailto:ala.khliifa@gmail.com',
  },
  {
    icon: <HiPhone />,
    label: 'Phone',
    value: '+216 56 829 196',
    href: 'tel:+21656829196',
  },
  {
    icon: <SiLinkedin />,
    label: 'LinkedIn',
    value: 'ala-ben-khlifa',
    href: 'https://linkedin.com/in/ala-ben-khlifa',
  },
  {
    icon: <SiGithub />,
    label: 'GitHub',
    value: 'alabenkhlifa',
    href: 'https://github.com/alabenkhlifa',
  },
  {
    icon: <HiMapPin />,
    label: 'Location',
    value: 'Tunis, Tunisia — Open to UAE / Saudi Arabia',
    href: null,
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// contact</span>
          <h2 className="section-title">
            Let's Build Something <span>Together</span>
          </h2>
        </div>

        <div className="contact-layout" ref={ref}>
          <div className={`contact-text ${inView ? 'visible' : ''}`}>
            <p>
              I'm currently open to <strong>Software Architect</strong> and{' '}
              <strong>Tech Lead</strong> opportunities, particularly in the{' '}
              <em>UAE</em> and <em>Saudi Arabia</em>. Whether you have a role
              that fits, a project that needs architectural guidance, or just
              want to connect — I'd love to hear from you.
            </p>

            <div className="contact-links">
              {contactLinks.map((link, index) => (
                <div
                  key={link.label}
                  className="contact-link-item"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="contact-link-icon">{link.icon}</div>
                  <div className="contact-link-info">
                    <span className="contact-link-label">{link.label}</span>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.value}
                      </a>
                    ) : (
                      <span className="contact-link-value">{link.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`contact-cta ${inView ? 'visible' : ''}`}>
            <div className="contact-cta-card">
              <h3>Ready to connect?</h3>
              <p>
                Drop me an email and I'll get back to you as soon as possible.
              </p>
              <a href="mailto:ala.khliifa@gmail.com" className="btn btn-primary">
                <HiEnvelope /> Send an Email
              </a>
              <a
                href="https://linkedin.com/in/ala-ben-khlifa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <SiLinkedin /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
