import { useState, useEffect, useRef } from 'react';
import profileImg from '../assets/john.png';
import reactLogo from '../assets/techno/react.png';
import tailwindLogo from '../assets/techno/tailwind.png';
import tsLogo from '../assets/techno/typescript.svg';
import nextLogo from '../assets/techno/next-js.webp';
import { useLanguage } from '../context/LanguageContext';

function Hero() {
  const { t } = useLanguage();
  const ROLES = t.hero.roles;

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const textRef = useRef('');

  useEffect(() => {
    const fullText = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayed.length < fullText.length) {
        timeout = setTimeout(() => setDisplayed(fullText.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    textRef.current = displayed;
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="hero-section" id="home">
      <div className="container-main" style={{ width: '100%', paddingTop: '24px', paddingBottom: '48px' }}>
        <div className="hero-grid">

          {/* ── Text Content ── */}
          <div className="scroll-reveal-left" style={{ textAlign: 'center' }} data-text-col>
            <style>{`@media(min-width:1024px){[data-text-col]{text-align:left;}}`}</style>

            <span className="hero-badge">
              <span className="hero-badge-dot" />
              {t.hero.badge}
            </span>

            <h1 className="hero-title">
              {t.hero.greeting}{' '}
              <span className="hero-title-accent">John Simou</span>
            </h1>

            <p className="hero-subtitle">
              {displayed}
              <span className="typing-cursor" />
            </p>

            <p className="hero-description">
              {t.hero.description}
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>rocket_launch</span>
                {t.hero.ctaProjects}
              </a>
              <a href="#contact" className="btn-glass">
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>mail</span>
                {t.hero.ctaContact}
              </a>
            </div>
          </div>

          {/* ── Profile Image ── */}
          <div className="hero-image-wrapper scroll-reveal-right" style={{ padding: '16px 0' }}>
            <div className="hero-image-ring">
              <div className="hero-image-inner">
                <img
                  src={profileImg}
                  alt="John Simou — Front-End Developer & IA"
                  fetchPriority="high"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div
              className="hero-float-icon glass animate-float"
              style={{ position: 'absolute', top: '6%', left: '10%', animationDelay: '0s' }}
              title="React"
            >
              <img src={reactLogo} alt="React" />
            </div>
            <div
              className="hero-float-icon glass animate-float"
              style={{ position: 'absolute', top: '18%', right: '4%', animationDelay: '0.9s' }}
              title="Next.js"
            >
              <img src={nextLogo} alt="Next.js" style={{ borderRadius: 4 }} />
            </div>
            <div
              className="hero-float-icon glass animate-float-reverse"
              style={{ position: 'absolute', bottom: '8%', right: '12%', animationDelay: '0.4s' }}
              title="TypeScript"
            >
              <img src={tsLogo} alt="TypeScript" />
            </div>
            <div
              className="hero-float-icon glass animate-float"
              style={{ position: 'absolute', bottom: '20%', left: '4%', animationDelay: '1.3s' }}
              title="Tailwind CSS"
            >
              <img src={tailwindLogo} alt="Tailwind CSS" />
            </div>

            {/* AI Sparkle */}
            <div
              className="hero-float-icon glass animate-float-reverse"
              style={{ position: 'absolute', top: '42%', left: '-2%', animationDelay: '0.6s' }}
              title="IA"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 26, color: 'var(--color-primary)' }}>auto_awesome</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;