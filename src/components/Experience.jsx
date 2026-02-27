import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const experiences = [
  {
    role: "CTO & Co-Founder",
    company: "VERSE",
    period: "Oct 2025 — Present",
    project: "Digital Out-of-Home Advertising Platform",
    highlights: [
      "Architected and built from scratch a full-stack DOOH platform displaying targeted ads on venue screens, with planned UK expansion",
      "Designed entire AWS infrastructure: ECS Fargate, RDS PostgreSQL 15, ElastiCache Redis 7, S3 + CloudFront, Terraform IaC",
      "Attracted enterprise advertisers: BYD, Tunisie Telecom, Carrefour"
    ],
    tech: ["AWS", "ECS Fargate", "Terraform", "PostgreSQL", "Redis", "CloudFront", "GitHub Actions", "WebSocket"]
  },
  {
    role: "Lead Software Engineer",
    company: "MaibornWolff GmbH",
    period: "Oct 2024 — Present",
    project: "Mercedes-Benz & Husky",
    highlights: [
      "Led migration of Mercedes-Benz PlaTo app to MO360 proprietary Azure PaaS platform",
      "Reverse-engineered Azure infra into Terraform IaC for Husky; designed API integration via Azure API Management",
      "Developed KT+ factory software features using Domain Driven Design"
    ],
    tech: ["Azure", "Terraform", ".NET/C#", "Azure API Management", "DDD", "Load Testing"]
  },
  {
    role: "Senior Software Engineer",
    company: "MaibornWolff GmbH",
    period: "Oct 2022 — Oct 2024",
    project: "Rolls-Royce Motor Cars — Whispers",
    highlights: [
      "Led team of 4 engineers on Whispers, an exclusive platform connecting Rolls-Royce customers and dealers",
      "Owned architecture across 10 microservices (Spring Boot, Kotlin) with event-driven patterns",
      "AWS + Kubernetes deployment, MQTT real-time messaging, CI/CD with SonarQube"
    ],
    tech: ["Spring Boot", "Kotlin", "AWS", "Kubernetes", "MQTT", "PostgreSQL", "Firebase"]
  },
  {
    role: "Software Engineer",
    company: "MaibornWolff GmbH",
    period: "Oct 2020 — Oct 2022",
    project: "Rolls-Royce Motor Cars — Whispers",
    highlights: [
      "Built backend microservices and native Android/iOS apps for Rolls-Royce's global platform",
      "Migrated legacy Drupal backend to Spring Boot microservices",
      "Android (Kotlin, Jetpack Compose) + iOS (Swift, SwiftUI) development"
    ],
    tech: ["Spring Boot", "Java", "Kotlin", "Swift", "Android", "iOS", "Docker", "Kubernetes"]
  },
  {
    role: "Software Engineer",
    company: "Talan Tunisie",
    period: "Feb 2019 — Oct 2020",
    project: "Byblos — Enterprise ERP",
    highlights: [
      "Led migration from Java EE/JSF monolith to Spring Boot/Angular microservices",
      "Implemented async messaging with RabbitMQ for system decoupling",
      "Developed financial reporting and analytics modules"
    ],
    tech: ["Spring Boot", "Angular", "Java EE", "RabbitMQ", "PostgreSQL"]
  }
];

function TimelineEntry({ experience, index }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="timeline-item" ref={ref}>
      <div className="timeline-dot" />
      <div className={`timeline-card${inView ? ' visible' : ''}`}>
        <div className="timeline-role">{experience.role}</div>
        <div className="timeline-company">{experience.company}</div>
        <div className="timeline-period">{experience.period}</div>
        <div className="timeline-project">{experience.project}</div>
        <ul className="timeline-highlights">
          {experience.highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
        <div className="timeline-tech">
          {experience.tech.map((tag, i) => (
            <span className="timeline-tech-tag" key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <p className="section-label">// experience</p>
        <h2 className="section-title">
          Career <span>Journey</span>
        </h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <TimelineEntry key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
