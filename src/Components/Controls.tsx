import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

/**
 * Theme (dark/light) + language (FR/EN) switchers.
 * Reused in the desktop navbar and the mobile menu.
 */
function Controls({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  const dim = size === 'lg' ? 46 : 38;
  const icon = size === 'lg' ? 22 : 18;

  return (
    <div className="controls-group">
      <button
        type="button"
        onClick={toggleTheme}
        className="control-btn"
        style={{ width: dim, height: dim }}
        aria-label={t.nav.theme}
        title={t.nav.theme}
      >
        {theme === 'dark' ? <Sun size={icon} /> : <Moon size={icon} />}
      </button>

      <button
        type="button"
        onClick={toggleLang}
        className="control-btn control-lang"
        style={{ height: dim, minWidth: dim }}
        aria-label={t.nav.language}
        title={t.nav.language}
      >
        <span className={lang === 'fr' ? 'lang-active' : ''}>FR</span>
        <span className="lang-sep">/</span>
        <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
      </button>
    </div>
  );
}

export default Controls;
