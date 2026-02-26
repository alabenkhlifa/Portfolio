# Portfolio — Ala Ben Khalifa

## Project Goal

Build a stunning, interview-winning personal portfolio website for **Ala Ben Khalifa** — a Software Architect & Tech Lead with 6+ years of experience. The site will be deployed to **GitHub Pages** and must showcase deep technical expertise, enterprise client work, and leadership capabilities. The design must be so polished and compelling that hiring managers and recruiters feel compelled to reach out.

## Deployment

- **Platform:** GitHub Pages (static site)
- **Domain:** Will be served from the `main` branch (or `gh-pages` branch) — use static HTML/CSS/JS or a static site generator that outputs to a deployable folder
- **No server-side rendering** — everything must be client-side

## Tech Stack

- **React 19 + Vite** — fast build, component-based architecture
- **GSAP** (GreenSock) for premium scroll-triggered animations and transitions
- **tsparticles** for interactive animated particle background (floating nodes/connections evoking microservices architecture)
- **react-icons** for tech/social icons
- **react-intersection-observer** for scroll-triggered reveals
- **CSS Modules or plain CSS** with CSS Custom Properties for theming
- **GitHub Pages** deployment via `gh-pages` or GitHub Actions

## Design Direction

### Theme: "Architect of Systems"
The portfolio should feel like peering into the mind of someone who builds complex distributed systems — clean, precise, powerful. Think: dark command-center aesthetic meets luxury automotive brand polish (inspired by Rolls-Royce and Mercedes-Benz, brands Ala has worked with).

### Color Palette
- **Background:** Deep black `#0a0a0a` to dark charcoal `#111111`
- **Primary accent:** Electric blue `#00b4d8` or cyan `#00f5ff` (evoking cloud/tech)
- **Secondary accent:** Warm amber/gold `#f59e0b` (evoking premium/luxury brands)
- **Text primary:** Off-white `#e4e4e7`
- **Text secondary:** Muted gray `#a1a1aa`
- **Gradient highlights:** Cyan-to-blue or cyan-to-purple for glowing effects
- **Card backgrounds:** `#1a1a2e` or `#16162a` with subtle glassmorphism (backdrop-blur)

### Typography
- **Headings:** Inter, Space Grotesk, or JetBrains Mono — clean, modern, slightly technical
- **Body:** Inter or system font stack for readability
- **Monospace accents:** JetBrains Mono or Fira Code for code-like elements (tech tags, terminal-style sections)

### Animation Philosophy
- **Scroll-triggered reveals:** Sections fade/slide in as user scrolls (GSAP ScrollTrigger)
- **Staggered animations:** List items, cards, and tech tags animate in sequence with slight delays
- **Parallax depth:** Background layers move at different speeds for depth
- **Interactive particles:** Background particle network that subtly reacts to mouse movement
- **Typewriter effect:** For the hero tagline or key phrases
- **Counter animations:** Numbers count up when stats section enters viewport (6+ years, 10 microservices, 5 certifications, etc.)
- **Smooth page transitions:** Sections flow seamlessly with easing
- **Hover micro-interactions:** Cards lift with glow, buttons pulse, tech icons highlight
- **Loading animation:** Brief, elegant preloader with initials "ABK" or a minimal logo animation
- **Timeline animation:** Career timeline draws/reveals as user scrolls through it

### Layout Principles
- **Full-viewport hero** with particle background
- **Single-page scrolling** with smooth anchor navigation
- **Generous whitespace** — let the content breathe
- **Max content width ~1200px**, centered
- **Mobile-first responsive** — must look flawless on all devices
- **Sticky/transparent navigation** that changes on scroll

---

## Website Sections & Content

### 1. Hero Section
- Full-screen dark background with interactive particle network animation (nodes + connecting lines, evoking microservices architecture)
- Name: **ALA BEN KHALIFA**
- Animated typewriter cycling through titles:
  - `Software Architect`
  - `CTO & Co-Founder`
  - `Tech Lead — Backend & Microservices`
  - `Multi-Cloud Engineer (AWS + Azure)`
  - `Spring Certified Professional`
- Brief one-liner: *"I design, build, and scale the cloud-native platforms behind world-class brands."*
- CTA buttons: "View My Work" (scrolls to projects) | "Get In Touch" (scrolls to contact)
- Subtle scroll-down indicator (animated chevron)

### 2. About Section
- Short, punchy professional summary (not a wall of text):
  > Software Architect and Technical Leader with 6+ years of experience designing and scaling cloud-native platforms across AWS and Azure. Currently CTO & Co-Founder of a DOOH advertising startup serving enterprise brands like BYD, Tunisie Telecom, and Carrefour. Leading cloud migration and API platform initiatives for Mercedes-Benz and Husky at MaibornWolff, a German technology consultancy. University instructor in Microservices Architecture and Spring Framework at ENSIT.
- Animated stat counters:
  - **6+** Years of Experience
  - **10+** Microservices Architected
  - **5** Professional Certifications
  - **4** Enterprise Brands Served
- Location badge: Tunis, Tunisia | Open to relocation — UAE / Saudi Arabia
- Download resume button (link to a hosted PDF or the resume file)

### 3. Expertise / Skills Section
Title: "What I Architect"

Display as animated cards or an interactive grid. Group by domain:

**Cloud Architecture**
- AWS (ECS Fargate, RDS, ElastiCache, S3, CloudFront, ALB, ECR, VPC, Secrets Manager)
- Azure (API Management, App Services, Azure AD, Key Vault)
- Multi-cloud strategy

**Infrastructure & DevOps**
- Terraform (IaC)
- GitHub Actions CI/CD
- Docker & Kubernetes
- SonarQube

**Backend & Architecture**
- Microservices & Event-Driven Architecture
- Spring Boot / Spring Security / Spring Data
- NestJS, .NET / C#
- REST APIs, WebSocket, OAuth2, MQTT, RabbitMQ
- Domain Driven Design

**Programming Languages**
- Java, Kotlin, TypeScript, C#

**Data & Storage**
- PostgreSQL, MongoDB, Redis, Firebase

**AI & Emerging Tech**
- RAG (Retrieval-Augmented Generation)
- AI-assisted agentic development
- LLM integration

Each skill card should have a subtle glow animation on hover. Tech icons where possible (use SVG icons from devicons or similar).

### 4. Experience Timeline Section
Title: "Career Journey"

Interactive vertical timeline with scroll-triggered animations. Each entry reveals as the user scrolls. Use company logos where possible.

**Timeline entries (newest first):**

1. **CTO & Co-Founder** — VERSE (2024 - Present)
   - DOOH advertising platform | AWS cloud architecture
   - Enterprise clients: BYD, Tunisie Telecom, Carrefour
   - Solo architect: ECS Fargate, RDS, ElastiCache, S3, CloudFront, Terraform, GitHub Actions

2. **Lead Software Engineer** — MaibornWolff GmbH (Oct 2024 - Present)
   - Mercedes-Benz: PlaTo migration to MO360 (Azure PaaS)
   - Husky Injection Molding: Azure infra reverse-engineering, API Management, load testing
   - Mercedes-Benz: KT+ factory software (DDD, .NET/C#)

3. **Senior Software Engineer** — MaibornWolff GmbH (Oct 2022 - Oct 2024)
   - Rolls-Royce Motor Cars: Whispers Platform
   - Led team of 4 engineers, 10 microservices (Spring Boot, Kotlin)
   - AWS + Kubernetes, MQTT real-time messaging, CI/CD with SonarQube

4. **Software Engineer** — MaibornWolff GmbH (Oct 2020 - Oct 2022)
   - Rolls-Royce Motor Cars: Whispers Platform
   - Spring Boot microservices, Android (Jetpack Compose), iOS (SwiftUI)
   - Drupal to Spring Boot migration

5. **Software Engineer** — Talan Tunisie (Feb 2019 - Oct 2020)
   - Byblos Enterprise ERP
   - Java EE/JSF to Spring Boot/Angular migration
   - RabbitMQ, financial reporting modules

### 5. Featured Projects Section
Title: "Projects That Define My Craft"

Showcase cards with hover effects and expandable details:

**VERSE — DOOH Advertising Platform** (Founder Project)
- Built from zero to production
- Full AWS infrastructure designed and deployed single-handedly
- Enterprise clients: BYD, Tunisie Telecom, Carrefour
- Tech: AWS ECS Fargate, RDS PostgreSQL 15, ElastiCache Redis 7, S3 + CloudFront, Terraform, GitHub Actions, WebSocket
- Highlight: Sole technical owner — architecture, backend, cloud, DevOps

**Rolls-Royce Whispers** (MaibornWolff)
- Exclusive digital platform for Rolls-Royce customers & dealers
- 10 microservices, event-driven architecture
- iOS & Android native apps
- Tech: Spring Boot, Kotlin, AWS, Kubernetes, MQTT, Firebase
- Highlight: Grew from engineer to team lead managing 4 engineers

**Mercedes-Benz PlaTo → MO360 Migration** (MaibornWolff)
- Production app migration to proprietary Azure PaaS
- Phased migration strategy, zero downtime
- Tech: Azure, Terraform, Cloud-native patterns
- Highlight: Led architecture decisions aligned with Mercedes-Benz platform constraints

**Husky Injection Molding — Cloud & API Architecture** (MaibornWolff)
- Reverse-engineered Azure infra → Terraform IaC
- Load testing strategy for bottleneck identification
- API integration via Azure API Management
- Tech: Azure, Terraform, Azure API Management, Load Testing

**Byblos Enterprise ERP** (Talan Tunisie)
- Major monolith-to-microservices migration
- Java EE/JSF → Spring Boot/Angular
- RabbitMQ async messaging
- Financial reporting & analytics modules

### 6. Certifications Section
Title: "Certified Expertise"

Display as glowing badge cards with issuing organization logos:

1. **AWS Certified Solutions Architect – Associate (SAA-C03)** — Amazon Web Services
2. **Microsoft Certified: Azure Developer Associate (AZ-204)** — Microsoft
3. **VMware Spring Certified Professional 2024 v2** — VMware / Broadcom
4. **iSAQB CPSA-FL** (Certified Professional for Software Architecture – Foundation Level) — iSAQB
5. **Professional Scrum Master I (PSM I)** — Scrum.org

### 7. Teaching & Mentorship Section
Title: "Sharing Knowledge"

- **University Instructor** at ENSIT (National Higher School of Engineering of Tunis) — Sept 2022 – Present
  - Microservices Architecture (SOA)
  - Spring Framework
- Quote or philosophy: *"If you can't explain architecture clearly, you don't understand it deeply enough."*
- Mention: Mentored and coached engineering teams at MaibornWolff, fostering growth-oriented culture

### 8. Contact Section
Title: "Let's Build Something Together"

- Email: ala.khliifa@gmail.com
- Phone: +216 56 829 196
- LinkedIn: linkedin.com/in/ala-ben-khlifa
- Location: Tunis, Tunisia — Open to relocation (UAE / Saudi Arabia)
- A contact form (can use Formspree or similar for static site form handling)
- Animated background element (subtle particles or gradient)

### 9. Footer
- Copyright line
- "Designed & Built by Ala Ben Khalifa"
- Quick links to sections
- Social links (LinkedIn, GitHub, Email)

---

## Key UX Requirements

- **Performance:** Lighthouse score 90+ on all metrics. Lazy-load images, minimize JS bundles, use modern image formats
- **Accessibility:** Semantic HTML, proper ARIA labels, keyboard navigation, sufficient color contrast
- **SEO:** Meta tags, Open Graph tags, structured data, descriptive title/description
- **Responsive:** Flawless on mobile (360px+), tablet, and desktop
- **Smooth scrolling:** Native CSS `scroll-behavior: smooth` plus GSAP for complex animations
- **Prefers-reduced-motion:** Respect user OS settings — disable heavy animations when requested
- **Fast load:** Target < 3s first contentful paint. Critical CSS inline, defer non-critical JS

## File Structure

```
Portfolio/
├── index.html
├── css/
│   ├── style.css          # Main styles
│   ├── animations.css     # GSAP/animation-specific styles
│   └── responsive.css     # Media queries
├── js/
│   ├── main.js            # Core logic, navigation, scroll handling
│   ├── animations.js      # GSAP animations, ScrollTrigger setup
│   ├── particles.js       # Particle background configuration
│   └── typewriter.js      # Typewriter effect for hero
├── assets/
│   ├── images/            # Optimized images, logos
│   ├── icons/             # SVG tech icons, social icons
│   └── resume/            # Downloadable resume PDF
├── CLAUDE.md
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Pages deployment workflow (if needed)
```

## GitHub Pages Deployment

- Configure the repo for GitHub Pages from Settings → Pages
- Source: Deploy from branch (`main`, `/root` or `/docs`)
- Or use a GitHub Actions workflow for build + deploy if using a build tool
- Ensure all asset paths are relative (not absolute) for GH Pages compatibility
- If using a custom domain later, add CNAME file

## Important Notes

- Do NOT include real phone numbers or emails in the HTML if privacy is a concern — use obfuscation or a contact form instead. **Ask before publishing contact details.**
- All animations must be buttery smooth (60fps). If performance drops, reduce particle count or simplify
- The site is the product — it should feel as polished as the enterprise platforms Ala has built
- Every section should subtly reinforce: *this person architects complex systems for the world's most prestigious brands*
- The dark theme is non-negotiable — it conveys technical depth and sophistication
- Test on Chrome, Firefox, Safari, and mobile browsers before deploying
