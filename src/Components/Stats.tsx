import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const STATS = [
  { id: 'projects', value: 10, suffix: '+' },
  { id: 'clients', value: 5, suffix: '+' },
  { id: 'expertises', value: 5, suffix: '' },
  { id: 'hours', value: 1000, suffix: '+' },
] as const;

function useCounter(target: number, duration = 1800, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
}

function StatItem({ value, label, suffix, id }: { value: number; label: string; suffix: string; id: string }) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCounter(value, 1800, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="scroll-reveal" id={`stat-${id}`} style={{ textAlign: 'center' }}>
      <div className="stat-number">
        {count}{suffix}
      </div>
      <p className="stat-label">{label}</p>
    </div>
  );
}

function Stats() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" style={{ padding: '64px 0' }} ref={sectionRef}>
      <div className="container-main">
        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <div key={stat.id} style={{ transitionDelay: `${i * 0.1}s` }}>
              <StatItem {...stat} label={t.stats.labels[stat.id]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
