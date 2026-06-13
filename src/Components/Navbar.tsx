import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';
import logo from '../assets/logoJohnCode.png';
import Controls from './Controls';
import { useLanguage } from '../context/LanguageContext';

const NAV_LINKS = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
] as const;

function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowScrollTop(window.scrollY > 400);

      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (window.scrollY >= el.offsetTop - 130) {
          current = el.getAttribute('id') || 'home';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    const next = !isOpen;
    setIsOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* ── Main Navbar ── */}
      <header className={`navbar-root ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-main navbar-inner">

          {/* Logo */}
          <a href="#home" className="navbar-logo" id="nav-logo">
            <img src={logo} alt="Logo de JohnCode" className='w-10 h-10'/>
            John<span>Code</span>
          </a>

          {/* Desktop Nav */}
          <nav className="navbar-desktop" aria-label="Navigation principale">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                id={`nav-link-${link.href.slice(1)}`}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
              >
                {t.nav.links[link.key]}
              </a>
            ))}
          </nav>

          {/* Controls + CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Controls />
            <a href="#contact" className="navbar-cta" id="nav-cta" style={{ textDecoration: 'none' }}>
              {t.nav.cta}
            </a>
            <button
              className="hamburger-btn"
              id="nav-hamburger"
              onClick={toggleMenu}
              aria-label={t.nav.toggleMenu}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <div
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu mobile"
      >
        <nav className="mobile-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`mobile-nav-${link.href.slice(1)}`}
              className={activeSection === link.href.slice(1) ? 'active' : ''}
              onClick={closeMenu}
            >
              {t.nav.links[link.key]}
            </a>
          ))}

          {/* Theme + language switchers inside the mobile menu */}
          <div style={{ marginTop: 8 }}>
            <Controls size="lg" />
          </div>

          <a
            href="#contact"
            id="mobile-nav-cta"
            onClick={closeMenu}
            style={{
              marginTop: 8,
              padding: '14px 40px',
              background: 'var(--color-primary)',
              color: '#fff',
              borderRadius: 'var(--radius-full)',
              fontWeight: 700,
              fontSize: '1.1rem',
              boxShadow: '0 6px 24px var(--color-primary-glow)',
            }}
          >
            {t.nav.cta}
          </a>
        </nav>
      </div>

      {/* ── Scroll to Top ── */}
      <button
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        id="scroll-top-btn"
        onClick={scrollToTop}
        aria-label={t.nav.backToTop}
      >
        <ChevronUp size={22} />
      </button>
    </>
  );
}

export default Navbar;