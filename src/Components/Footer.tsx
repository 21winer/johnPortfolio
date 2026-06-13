import { Linkedin, Github } from 'lucide-react';
import logo from '../assets/logoJohnCode.png';
import { useLanguage } from '../context/LanguageContext';

// Inline WhatsApp glyph — avoids pulling in the whole `iconsax-react` package
// just for a single icon.
const WhatsappIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const FOOTER_NAV = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
] as const;

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
    icon: <WhatsappIcon size={18} />,
  },
];

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer-root">
      <div className="container-main">
        {/* Top row */}
        <div className="footer-inner" style={{ marginBottom: 28 }}>
          {/* Brand */}
          <div>
            <a href="#home" className="footer-logo" id="footer-logo">
              <img src={logo} alt="Logo de JohnCode" className='w-10 h-10'/>
              John<span>Code</span>
            </a>
            <div className="footer-status" style={{ marginTop: 6 }}>
              <span className="status-dot" />
              <span>{t.footer.status}</span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="footer-links" aria-label="Footer navigation">
            {FOOTER_NAV.map((link) => (
              <a key={link.href} href={link.href} id={`footer-nav-${link.href.slice(1)}`}>
                {t.nav.links[link.key]}
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
            © {new Date().getFullYear()} John Simou. {t.footer.rights}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-on-surface-muted)',
            }}
          >
            {t.footer.madeWith}{' '}
            <span style={{ color: 'var(--color-primary)' }}>♥</span> {t.footer.by}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;