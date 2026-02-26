import { useState, useEffect, useCallback, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';

const stats = [
  { target: 6, suffix: '+', label: 'Years of Experience' },
  { target: 10, suffix: '+', label: 'Microservices Architected' },
  { target: 5, suffix: '', label: 'Professional Certifications' },
  { target: 4, suffix: '+', label: 'Enterprise Brands Served' },
];

function useCountUp(target, shouldStart, duration = 2000) {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  const animate = useCallback(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic: decelerates as it approaches the target
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [target, duration]);

  useEffect(() => {
    if (shouldStart) {
      animate();
    }
  }, [shouldStart, animate]);

  return count;
}

function StatCard({ target, suffix, label, inView }) {
  const count = useCountUp(target, inView);

  return (
    <div className="stat-card">
      <div className="stat-number">
        {count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-label">// about me</div>
        <h2 className="section-title">
          Building Systems That <span>Scale</span>
        </h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Software Architect and Technical Leader with <em>6+ years</em> of
              experience designing and scaling cloud-native platforms across AWS
              and Azure. Currently CTO &amp; Co-Founder of a DOOH advertising
              startup serving enterprise brands like <em>BYD</em>,{' '}
              <em>Tunisie Telecom</em>, and <em>Carrefour</em> — while leading
              cloud migration and API platform initiatives for{' '}
              <em>Mercedes-Benz</em> and <em>Husky</em> at MaibornWolff, a
              German technology consultancy.
            </p>
            <p>
              I also teach Microservices Architecture and Spring Framework at{' '}
              <em>ENSIT</em>, one of Tunisia's national engineering schools —
              because if you can't explain architecture clearly, you don't
              understand it deeply enough.
            </p>

            <div className="about-location">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Tunis, Tunisia — Open to relocation: UAE / Saudi Arabia
            </div>
          </div>

          <div className="stats-grid" ref={ref}>
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
