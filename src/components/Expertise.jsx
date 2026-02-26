import { useInView } from 'react-intersection-observer';
import {
  HiCloud,
  HiCommandLine,
  HiCpuChip,
  HiCodeBracket,
  HiCircleStack,
  HiSparkles,
} from 'react-icons/hi2';
import './Expertise.css';

const categories = [
  {
    icon: HiCloud,
    title: 'Cloud Architecture',
    skills: [
      'AWS (ECS Fargate, RDS, ElastiCache, S3, CloudFront, ALB, VPC)',
      'Azure (API Management, App Services, Azure AD, Key Vault)',
      'Multi-cloud Strategy',
    ],
  },
  {
    icon: HiCommandLine,
    title: 'Infrastructure & DevOps',
    skills: [
      'Terraform (IaC)',
      'GitHub Actions CI/CD',
      'Docker & Kubernetes',
      'SonarQube',
    ],
  },
  {
    icon: HiCpuChip,
    title: 'Backend & Architecture',
    skills: [
      'Microservices & Event-Driven',
      'Spring Boot / Spring Security / Spring Data',
      'NestJS, .NET / C#',
      'REST APIs, WebSocket, MQTT, RabbitMQ',
      'Domain Driven Design',
    ],
  },
  {
    icon: HiCodeBracket,
    title: 'Programming Languages',
    skills: ['Java', 'Kotlin', 'TypeScript', 'C#'],
  },
  {
    icon: HiCircleStack,
    title: 'Data & Storage',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
  },
  {
    icon: HiSparkles,
    title: 'AI & Emerging Tech',
    skills: [
      'RAG (Retrieval-Augmented Generation)',
      'AI-assisted Agentic Development',
      'LLM Integration',
    ],
  },
];

function ExpertiseCard({ icon: Icon, title, skills, index }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`expertise-card${inView ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="expertise-card-icon">
        <Icon />
      </div>
      <div className="expertise-card-title">{title}</div>
      <div className="expertise-tags">
        {skills.map((skill) => (
          <span key={skill} className="expertise-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Expertise() {
  return (
    <section className="expertise" id="expertise">
      <div className="container">
        <div className="section-label">// expertise</div>
        <h2 className="section-title">
          What I <span>Architect</span>
        </h2>

        <div className="expertise-grid">
          {categories.map((category, index) => (
            <ExpertiseCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
