import { Code, Linkedin, Github } from 'lucide-react';
import { Whatsapp } from 'iconsax-react';
import logo from '../assets/logoJohnCode.png';

const FOOTER_NAV = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL = [
  {
    id: 'footer-linkedin',
    href: 'https://www.linkedin.com/in/jeansimou',
    label: 'LinkedIn',
    icon: <Linkedin size={18} />,
  },
  {
    id: 'footer-github',
    href: 'https://github.com/21winer',
    label: 'GitHub',
    icon: <Github size={18} />,
  },
  {
    id: 'footer-whatsapp',
    href: 'https://wa.me/96145043',
    label: 'WhatsApp',
    icon: <Whatsapp size={18} color="currentColor" />,
  },
];

function Footer() {
  return (
    <footer className="footer-root">
      <div className="container-main">
        {/* Top row */}
        <div className="footer-inner" style={{ marginBottom: 28 }}>
          {/* Brand */}
          <div>
            <a href="#home" className="footer-logo" id="footer-logo">
              <img src={logo} alt="Logo de JohnCode" className='w-10 h-10'/>
              JOHN<span>CODE</span>
            </a>
            <div className="footer-status" style={{ marginTop: 6 }}>
              <span className="status-dot" />
              <span>Disponible pour de nouveaux projets</span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="footer-links" aria-label="Footer navigation">
            {FOOTER_NAV.map((link) => (
              <a key={link.href} href={link.href} id={`footer-nav-${link.href.slice(1)}`}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="social-links" style={{ margin: 0 }}>
            {SOCIAL.map((s) => (
              <a
                key={s.id}
                href={s.href}
                id={s.id}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={s.label}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: 'var(--color-outline)',
            marginBottom: 20,
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-on-surface-muted)',
            }}
          >
            © {new Date().getFullYear()} John Simou. Tous droits réservés.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-on-surface-muted)',
            }}
          >
            Conçu & développé avec{' '}
            <span style={{ color: 'var(--color-primary)' }}>♥</span> par johnCode
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;