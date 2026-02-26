import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const projectsData = [
  {
    name: "VERSE — DOOH Advertising Platform",
    badge: "Founder Project",
    badgeType: "gold",
    description:
      "Built from zero to production — a Digital Out-of-Home advertising platform displaying targeted ads on venue screens across restaurants, cafes, and bars.",
    highlights: [
      "Sole technical owner: architecture, backend, cloud, DevOps",
      "Full AWS infrastructure designed and deployed single-handedly",
      "Enterprise clients: BYD, Tunisie Telecom, Carrefour",
      "Planned expansion into UK market",
    ],
    tech: [
      "AWS ECS Fargate",
      "RDS PostgreSQL",
      "ElastiCache Redis",
      "S3 + CloudFront",
      "Terraform",
      "GitHub Actions",
      "WebSocket",
    ],
  },
  {
    name: "Rolls-Royce Whispers",
    badge: "MaibornWolff",
    badgeType: "cyan",
    description:
      "An exclusive digital platform connecting Rolls-Royce Motor Cars customers and dealers through iOS and Android applications.",
    highlights: [
      "Grew from engineer to team lead managing 4 engineers",
      "10 microservices with event-driven architecture",
      "Native iOS (SwiftUI) & Android (Jetpack Compose) apps",
      "Migrated legacy Drupal backend to Spring Boot",
    ],
    tech: [
      "Spring Boot",
      "Kotlin",
      "AWS",
      "Kubernetes",
      "MQTT",
      "Firebase",
      "Docker",
    ],
  },
  {
    name: "Mercedes-Benz PlaTo → MO360",
    badge: "MaibornWolff",
    badgeType: "cyan",
    description:
      "Production application migration from standard Azure infrastructure to Mercedes-Benz's proprietary MO360 Azure-based PaaS platform.",
    highlights: [
      "Designed phased migration strategy with zero downtime",
      "Led architecture decisions aligned with platform constraints",
      "Applied cloud-native patterns for scalability and cost-efficiency",
    ],
    tech: ["Azure", "Terraform", "Cloud Migration", "Cloud-Native Patterns"],
  },
  {
    name: "Husky — Cloud & API Architecture",
    badge: "MaibornWolff",
    badgeType: "cyan",
    description:
      "Cloud architecture optimization and API integration platform for Husky Injection Molding Systems.",
    highlights: [
      "Reverse-engineered Azure infra → codified as Terraform IaC",
      "Load testing strategy for bottleneck identification",
      "API integration via Azure API Management",
    ],
    tech: ["Azure", "Terraform", "Azure API Management", "Load Testing"],
  },
  {
    name: "Byblos — Enterprise ERP",
    badge: "Talan Tunisie",
    badgeType: "cyan",
    description:
      "Major architectural modernization of Talan Group's enterprise ERP system — monolith to microservices.",
    highlights: [
      "Java EE/JSF → Spring Boot/Angular migration",
      "RabbitMQ async messaging for system decoupling",
      "Financial reporting & analytics modules",
    ],
    tech: ["Spring Boot", "Angular", "Java EE", "RabbitMQ", "PostgreSQL"],
  },
];

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`project-card${inView ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="project-header">
        <h3 className="project-name">{project.name}</h3>
        {project.badge && (
          <span className={`project-badge ${project.badgeType}`}>
            {project.badge}
          </span>
        )}
      </div>

      <p className="project-description">{project.description}</p>

      <ul className="project-highlights">
        {project.highlights.map((highlight, i) => (
          <li key={i}>{highlight}</li>
        ))}
      </ul>

      <div className="project-tech">
        {project.tech.map((tag, i) => (
          <span key={i} className="project-tech-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <p className="section-label">// projects</p>
        <h2 className="section-title">
          Projects That Define My <span>Craft</span>
        </h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
