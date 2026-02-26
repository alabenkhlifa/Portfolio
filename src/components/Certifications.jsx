import { useInView } from 'react-intersection-observer';
import './Certifications.css';

const certifications = [
  { name: "AWS Solutions Architect – Associate", code: "SAA-C03", org: "Amazon Web Services", color: "#ff9900" },
  { name: "Azure Developer Associate", code: "AZ-204", org: "Microsoft", color: "#0078d4" },
  { name: "Spring Certified Professional 2024 v2", code: "Spring", org: "VMware / Broadcom", color: "#6db33f" },
  { name: "Software Architecture – Foundation Level", code: "CPSA-FL", org: "iSAQB", color: "#e44d26" },
  { name: "Professional Scrum Master I", code: "PSM I", org: "Scrum.org", color: "#009ada" },
];

function CertCard({ cert, index }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`cert-card${inView ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div
        className="cert-icon-glow"
        style={{
          background: `${cert.color}15`,
          boxShadow: `0 0 20px ${cert.color}20`,
        }}
      >
        <span style={{ color: cert.color }}>&#9670;</span>
      </div>
      <div className="cert-code" style={{ color: cert.color }}>
        {cert.code}
      </div>
      <div className="cert-name">{cert.name}</div>
      <div className="cert-org">{cert.org}</div>
    </div>
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
