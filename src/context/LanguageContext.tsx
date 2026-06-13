import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations, type Lang, type Translation } from '../i18n/translations';

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'portfolio-lang';

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'fr';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'fr' || stored === 'en') return stored;
  // First visit: use the browser language if it's English, otherwise French.
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'fr';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggleLang = () => setLangState((prev) => (prev === 'fr' ? 'en' : 'fr'));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
