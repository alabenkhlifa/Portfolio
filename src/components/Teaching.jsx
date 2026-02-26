import { useInView } from 'react-intersection-observer';
import './Teaching.css';

export default function Teaching() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="teaching" id="teaching">
      <div className="container">
        <div className="section-label">// teaching</div>
        <h2 className="section-title">
          Sharing <span>Knowledge</span>
        </h2>

        <div className={`teaching-content${inView ? ' visible' : ''}`} ref={ref}>
          <div className="teaching-card">
            <div className="teaching-role">University Instructor</div>
            <div className="teaching-institution">
              ENSIT — National Higher School of Engineering of Tunis
            </div>
            <div className="teaching-period">Sept 2022 — Present</div>
            <div className="teaching-subjects">
              <span className="teaching-subject">Microservices Architecture (SOA)</span>
              <span className="teaching-subject">Spring Framework</span>
            </div>
          </div>

          <div className="teaching-quote">
            <div className="teaching-quote-mark">"</div>
            <p>
              If you can't explain architecture clearly, you don't understand it deeply enough.
            </p>
          </div>

          <p className="teaching-mentoring">
            Beyond the classroom, I actively mentor junior engineers at{' '}
            <strong>MaibornWolff</strong>, guiding them through real-world architectural
            decisions, code reviews, and career growth — bridging the gap between academic
            knowledge and production-grade software engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
