import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { pt } from './pt';
import { en } from './en';

export type Language = 'pt' | 'en';

const dictionaries = { pt, en };
const STORAGE_KEY = 'pal-site-language';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof pt;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'pt';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'en' || stored === 'pt' ? stored : 'pt';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = dictionaries[language].htmlLang;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const setLanguage = (next: Language) => setLanguageState(next);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: dictionaries[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}