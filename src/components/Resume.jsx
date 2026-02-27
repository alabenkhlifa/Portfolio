import { useInView } from 'react-intersection-observer';
import './Resume.css';

export default function Resume() {
  const { ref: actionsRef, inView: actionsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: paperRef, inView: paperVisible } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="resume" id="resume">
      <div className="container">
        <div className="section-label">// resume</div>
        <h2 className="section-title">
          My <span>Resume</span>
        </h2>

        <div
          className={`resume-actions${actionsVisible ? ' visible' : ''}`}
          ref={actionsRef}
        >
          <div>
            <button className="btn btn-primary" onClick={handlePrint}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Save as PDF
            </button>
            <p className="resume-hint">
              Use "Save as PDF" in the print dialog for best results
            </p>
          </div>
        </div>

        <div
          className={`resume-paper${paperVisible ? ' visible' : ''}`}
          ref={paperRef}
        >
          {/* PAGE 1 */}
          <div className="resume-page resume-page-1">
            {/* Header */}
            <div className="resume-header">
              <h1 className="resume-name">Ala Ben Khalifa</h1>
              <p className="resume-title">
                Software Architect | Tech Lead (Backend & Microservices)
              </p>
              <div className="resume-contact-info">
                <span>ala.khliifa@gmail.com</span>
                <span>+216 56 829 196</span>
                <span>linkedin.com/in/ala-ben-khlifa</span>
                <span>
                  Tunis, Tunisia · Open to relocation — UAE / Saudi Arabia
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <ResumeSection title="Professional Summary">
              <p className="resume-summary">
                Software Architect and Technical Leader with 6+ years of
                experience designing, building, and scaling cloud-native
                platforms across AWS and Azure. Currently serving as CTO and
                Co-Founder of a DOOH advertising startup, where I
                single-handedly architected and deployed the entire cloud
                infrastructure on AWS, attracting enterprise clients including
                BYD, Tunisie Telecom, and Carrefour. Concurrently leading cloud
                migration and API platform initiatives for major automotive and
                industrial brands at MaibornWolff, a German technology
                consultancy. Proven track record in microservices architecture,
                infrastructure-as-code, and leading engineering teams on complex
                distributed systems. University-level instructor in
                Microservices Architecture and Spring Framework.
              </p>
            </ResumeSection>

            {/* Certifications */}
            <ResumeSection title="Certifications">
              <div className="resume-certs-grid">
                {[
                  'AWS Solutions Architect – Associate (SAA-C03)',
                  'Microsoft Azure Developer Associate (AZ-204)',
                  'VMware Spring Certified Professional 2024 v2',
                  'iSAQB CPSA-FL — Software Architecture Foundation',
                  'Professional Scrum Master I (PSM I)',
                ].map((cert) => (
                  <div key={cert} className="resume-cert-item">
                    • {cert}
                  </div>
                ))}
              </div>
            </ResumeSection>

            {/* Core Competencies */}
            <ResumeSection title="Core Competencies">
              <div>
                <CompetencyRow
                  label="Cloud Architecture"
                  value="AWS (ECS Fargate, RDS, ElastiCache, S3, CloudFront, ALB, ECR, NAT Gateway, Secrets Manager) · Azure (API Management, App Services, Azure AD)"
                />
                <CompetencyRow
                  label="Infrastructure & DevOps"
                  value="Terraform (IaC) · GitHub Actions CI/CD · Docker · Kubernetes · SonarQube"
                />
                <CompetencyRow
                  label="Backend & Architecture"
                  value="Microservices · Spring Boot · Spring Security · Spring Data · NestJS · .NET/C# · Event-driven · REST APIs · WebSocket · OAuth2 · MQTT · RabbitMQ · DDD"
                />
                <CompetencyRow
                  label="Data & Languages"
                  value="PostgreSQL · MongoDB · Redis · Firebase | Java · Kotlin · TypeScript · C#"
                />
                <CompetencyRow
                  label="AI & Emerging Tech"
                  value="RAG (Retrieval-Augmented Generation) · AI-assisted agentic development · LLM integration"
                />
                <CompetencyRow
                  label="Leadership"
                  value="Team management · Mentoring · Architecture decisions · Cross-functional coordination · Agile/Scrum"
                />
              </div>
            </ResumeSection>

            {/* Experience */}
            <ResumeSection title="Professional Experience">
              <ExpEntry
                title="Chief Technology Officer (CTO) & Co-Founder"
                dates="October 2025 – Present"
                company="VERSE — Digital Out-of-Home Advertising Platform"
                location="Tunis, Tunisia"
                bullets={[
                  'Sole technical owner responsible for all architecture decisions, backend development, cloud infrastructure, DevOps, and platform reliability — serving enterprise clients including BYD, Tunisie Telecom, and Carrefour',
                  'Architected and built from scratch a full-stack DOOH advertising platform displaying targeted ads on venue screens across restaurants, cafes, and bars, with planned UK market expansion',
                  'Designed and deployed the entire AWS cloud infrastructure single-handedly, with full infrastructure-as-code using Terraform and automated CI/CD pipelines via GitHub Actions',
                ]}
                tech="AWS (ECS Fargate, RDS, ElastiCache, S3, CloudFront, ALB, ECR) · Terraform · GitHub Actions · PostgreSQL · Redis · WebSocket · Docker"
              />

              <ExpEntry
                title="Lead Software Engineer"
                dates="October 2024 – Present"
                company="MaibornWolff GmbH — German Technology Consultancy"
                location="Tunis, Tunisia"
                subsections={[
                  {
                    subtitle: 'Mercedes-Benz — PlaTo Migration to MO360',
                    bullets: [
                      "Led the migration of a production web application from standard Azure infrastructure to MO360, Mercedes-Benz's proprietary Azure-based PaaS platform",
                      'Analyzed existing system architecture, identified technical risks, and designed a phased migration strategy ensuring minimal downtime and business continuity',
                      'Applied cloud-native architectural patterns to improve scalability, reliability, and cost-efficiency',
                    ],
                  },
                  {
                    subtitle:
                      'Husky Injection Molding — Cloud Architecture & Performance',
                    bullets: [
                      'Reverse-engineered existing Azure cloud infrastructure and codified it using Terraform (Infrastructure as Code)',
                      'Designed and executed load testing strategies to identify system bottlenecks, delivering strategic recommendations for infrastructure scalability',
                      'Designed and implemented an API integration architecture using Azure API Management to synchronize factory data with internal systems',
                    ],
                  },
                ]}
                tech="Azure · Terraform · Azure API Management · .NET/C# · DDD · Load Testing · Cloud Migration"
              />
            </ResumeSection>

            <ExpEntry
              title="Senior Software Engineer"
              dates="October 2022 – October 2024"
              company="MaibornWolff GmbH"
              location="Tunis, Tunisia"
              subsections={[
                {
                  subtitle: 'Rolls-Royce Motor Cars — Whispers Platform',
                  bullets: [
                    'Grew into a leadership role, managing a team of 4 engineers (3 Seniors + 1 Lead) on Whispers, an exclusive digital platform connecting Rolls-Royce customers and dealers through iOS and Android applications',
                    'Owned architecture decisions across 10 microservices built with Spring Boot (Java/Kotlin), following event-driven architecture principles',
                    'Deployed and operated services on AWS with Kubernetes for container orchestration, with MQTT-based real-time messaging',
                    'Drove CI/CD best practices, code quality via SonarQube, and mentored team members fostering a growth-oriented engineering culture',
                  ],
                },
              ]}
              tech="Spring Boot · Kotlin · Java · Microservices · AWS · Kubernetes · Docker · MQTT · PostgreSQL · Firebase · SonarQube"
            />

            <ResumeSection title="Professional Experience (continued)">
              <ExpEntry
                title="Software Engineer"
                dates="October 2020 – October 2022"
                company="MaibornWolff GmbH"
                location="Tunis, Tunisia"
                subsections={[
                  {
                    subtitle: 'Rolls-Royce Motor Cars — Whispers Platform',
                    bullets: [
                      "Developed microservices backend and native Android (Kotlin, Jetpack Compose) / iOS (Swift, SwiftUI) applications for Rolls-Royce's global customer platform",
                      'Migrated legacy Drupal backend to Spring Boot microservices with MQTT real-time messaging',
                    ],
                  },
                ]}
                tech="Spring Boot · Java · Kotlin · Swift · Android · iOS · MVVM · Docker · Kubernetes · MQTT · PostgreSQL · Firebase"
              />

              <ExpEntry
                title="Software Engineer"
                dates="February 2019 – October 2020"
                company="Talan Tunisie"
                location="Tunis, Tunisia"
                subsections={[
                  {
                    subtitle: 'Byblos — Talan Group Enterprise ERP',
                    bullets: [
                      'Migrated Java EE/JSF monolith to Spring Boot/Angular microservices with RabbitMQ async messaging',
                      'Developed financial reporting and analytics modules for the enterprise ERP platform',
                    ],
                  },
                ]}
                tech="Spring Boot · Angular · Java EE · JSF · RabbitMQ · PostgreSQL · Microservices"
              />
            </ResumeSection>

            {/* Education */}
            <ResumeSection title="Education">
              <div className="resume-edu-entry">
                <div className="resume-edu-header">
                  <strong className="resume-edu-degree">
                    Software Engineering Diploma
                  </strong>
                  <span className="resume-edu-dates">2016 – 2019</span>
                </div>
                <div className="resume-edu-school">
                  ESPRIT — Private Higher School of Engineering and Technology,
                  Tunis
                </div>
              </div>
              <div className="resume-edu-entry">
                <div className="resume-edu-header">
                  <strong className="resume-edu-degree">
                    Bachelor's Degree, Electronics & Communications Engineering
                  </strong>
                  <span className="resume-edu-dates">2012 – 2016</span>
                </div>
                <div className="resume-edu-school">
                  ISIMM — High Institute of Informatics and Mathematics,
                  Monastir
                </div>
              </div>
            </ResumeSection>

            {/* Additional */}
            <ResumeSection title="Additional">
              <div className="resume-additional">
                <div className="resume-additional-item">
                  <strong>Teaching:</strong> Microservices Architecture (SOA) &
                  Spring Framework Trainer at ENSIT — National Higher School of
                  Engineering of Tunis (September 2022 – Present)
                </div>
                <div className="resume-additional-item">
                  <strong>Languages:</strong> Arabic (Native) · French (Professional) · English (Professional)
                </div>
                <div className="resume-additional-item">
                  <strong>Interests:</strong> Cloud architecture, AI-assisted
                  development, smart home automation, automotive technology
                </div>
              </div>
            </ResumeSection>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResumeSection({ title, children }) {
  return (
    <div className="resume-section">
      <h2 className="resume-section-title">{title}</h2>
      {children}
    </div>
  );
}

function CompetencyRow({ label, value }) {
  return (
    <div className="resume-competency">
      <strong>{label}:</strong> {value}
    </div>
  );
}

function ExpEntry({ title, dates, company, location, bullets, subsections, tech }) {
  return (
    <div className="resume-exp">
      <div className="resume-exp-header">
        <strong className="resume-exp-title">{title}</strong>
        <span className="resume-exp-dates">{dates}</span>
      </div>
      <div className="resume-exp-company">
        {company} · {location}
      </div>

      {bullets && (
        <ul className="resume-exp-bullets">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}

      {subsections &&
        subsections.map((sub, i) => (
          <div key={i} style={{ marginBottom: i < subsections.length - 1 ? 8 : 0 }}>
            <div className="resume-exp-subtitle">{sub.subtitle}</div>
            <ul className="resume-exp-bullets">
              {sub.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}

      {tech && (
        <div className="resume-exp-tech">
          <strong>Tech:</strong> {tech}
        </div>
      )}
    </div>
  );
}
