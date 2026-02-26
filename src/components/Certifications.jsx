import { useInView } from 'react-intersection-observer';
import { FaAws, FaMicrosoft } from 'react-icons/fa';
import { SiSpring } from 'react-icons/si';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { TbRefreshAlert } from 'react-icons/tb';
import './Certifications.css';

const certifications = [
  { name: "AWS Solutions Architect – Associate", code: "SAA-C03", org: "Amazon Web Services", color: "#ff9900", icon: <FaAws /> },
  { name: "Azure Developer Associate", code: "AZ-204", org: "Microsoft", color: "#0078d4", url: "https://learn.microsoft.com/en-gb/users/alabenkhlifa-5063/credentials/9c8536062d8cb627", icon: <FaMicrosoft /> },
  { name: "Spring Certified Professional 2024 v2", code: "Spring", org: "VMware / Broadcom", color: "#6db33f", url: "https://www.credly.com/badges/870f3004-4db1-4af0-80fa-2ea2a9c6f9bc/public_url", icon: <SiSpring /> },
  { name: "Software Architecture – Foundation Level", code: "CPSA-FL", org: "iSAQB", color: "#e44d26", url: "https://www.certible.com/badge/42b8de20-3d49-44f4-8290-488f81321502/", icon: <HiOutlineBuildingOffice2 /> },
  { name: "Professional Scrum Master I", code: "PSM I", org: "Scrum.org", color: "#009ada", url: "https://www.credly.com/badges/8708e36f-ffb1-48f7-b33d-2325f55cb114", icon: <TbRefreshAlert /> },
];

function CertCard({ cert, index }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const Wrapper = cert.url ? 'a' : 'div';
  const wrapperProps = cert.url
    ? { href: cert.url, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      ref={ref}
      className={`cert-card${inView ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
      {...wrapperProps}
    >
      <div
        className="cert-icon-glow"
        style={{
          background: `${cert.color}15`,
          boxShadow: `0 0 20px ${cert.color}20`,
        }}
      >
        <span style={{ color: cert.color, fontSize: '1.5rem', display: 'flex' }}>{cert.icon}</span>
      </div>
      <div className="cert-code" style={{ color: cert.color }}>
        {cert.code}
      </div>
      <div className="cert-name">{cert.name}</div>
      <div className="cert-org">{cert.org}</div>
    </Wrapper>
  );
}

export default function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <div className="section-label">// certifications</div>
        <h2 className="section-title">
          Certified <span>Expertise</span>
        </h2>

        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <CertCard key={cert.code} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
