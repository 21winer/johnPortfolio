import { useEffect, useRef } from 'react';
import imgCSS from '../assets/techno/css.png';
import imgJS from '../assets/techno/js.png';
import imgREACT from '../assets/techno/react.png';
import imgHTML from '../assets/techno/html.png';
import imgTYPE from '../assets/techno/typescript.svg';
import imgTAILWIND from '../assets/techno/tailwind.png';
import imgNEXT from '../assets/techno/next-js.webp';
import yxenlabs from '../assets/companies/YxenLabs.png';

const SKILL_CARDS = [
  {
    id: 'frontend',
    icon: 'code',
    title: 'Front-End Mastery',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'HTML', 'CSS'],
  },
  {
    id: 'uiux',
    icon: 'design_services',
    title: 'UI/UX Design IA',
    tags: ['Figma'],
  },
  {
    id: 'ai',
    icon: 'smart_toy',
    title: 'Intelligence Artificielle',
    tags: ['Claude AI', 'LLMs', 'Prompt Eng.', 'Stitch', 'AI Tools'],
  },
  {
    id: 'automation',
    icon: 'settings_suggest',
    title: 'Automatisation',
    tags: ['Make', 'Workflows'],
  },
  {
    id: 'graphism',
    icon: 'brush',
    title: 'Création Graphique',
    tags: ['Photoshop', 'Branding'],
  },
  {
    id: 'streaming',
    icon: 'podcasts',
    title: 'Live Streaming',
    tags: ['vMix', 'NDI', 'Broadcast'],
  },
];

const TECH_LOGOS = [
  { name: 'HTML', img: imgHTML },
  { name: 'CSS', img: imgCSS },
  { name: 'JavaScript', img: imgJS },
  { name: 'React', img: imgREACT },
  { name: 'Tailwind', img: imgTAILWIND },
  { name: 'TypeScript', img: imgTYPE },
  { name: 'Next.js', img: imgNEXT },
];

function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );

    sectionRef.current?.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-gap" id="skills" ref={sectionRef}>
      <div className="container-main">
        {/* Title */}
        <div className="scroll-reveal" style={{ marginBottom: 48 }}>
          <h2 className="section-title">Mes Compétences</h2>
          <div className="section-underline" style={{ margin: '0 0 12px' }} />
          <p className="section-subtitle">
            Un arsenal technologique complet pour vos projets les plus ambitieux.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="skills-grid scroll-reveal">
          {SKILL_CARDS.map((card) => (
            <div key={card.id} className="skill-card" id={`skill-${card.id}`}>
              <span className="material-symbols-outlined skill-card-icon">{card.icon}</span>
              <h3>{card.title}</h3>
              <div className="skill-tags">
                {card.tags.map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Logos Row */}
        <div className="tech-logos-row scroll-reveal">
          {TECH_LOGOS.map((tech) => (
            <div key={tech.name} className="tech-logo-item" title={tech.name}>
              <img src={tech.img} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Experience Strip */}
        <div className="scroll-reveal" style={{ marginTop: 40 }}>
          <div className="experience-strip">
            <img src={yxenlabs} alt="Yxen Labs" />
            <div>
              <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-primary-dim)' }}>
                Frontend Developer — Yxen Labs
              </p>
              <p style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--color-on-surface-muted)', marginTop: 2 }}>
                Juil 2025 — Présent
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-muted)', marginTop: 6, lineHeight: 1.5 }}>
                Développement de landing pages, dashboards UI/UX et applications mobiles via Capacitor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;