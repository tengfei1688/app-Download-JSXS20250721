import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Translations {
  [key: string]: string | Translations;
}

interface I18nContextValue {
  locale: string;
  t: (key: string) => string;
  changeLanguage: (locale: string) => void;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
  initialLocale?: string;
}

const getNestedValue = (obj: Translations, path: string): string => {
  const result = path.split('.').reduce((curr: Translations | string, key) => {
    if (typeof curr === 'object' && curr !== null && key in curr) {
      return curr[key];
    }
    return path;
  }, obj);
  return typeof result === 'string' ? result : path;
};

export const I18nProvider: React.FC<I18nProviderProps> = ({ 
  children, 
  initialLocale = 'zh-CN' 
}) => {
  const [locale, setLocale] = useState(initialLocale);
  const [translations, setTranslations] = useState<Translations>({});

  useEffect(() => {
    // Load translations based on locale
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${locale}/common.json`);
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    };

    loadTranslations();
  }, [locale]);

  const t = (key: string): string => {
    return getNestedValue(translations, key);
  };

  const changeLanguage = (newLocale: string) => {
    setLocale(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
    }
  };

  // Load locale from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale');
      if (savedLocale && savedLocale !== locale) {
        setLocale(savedLocale);
      }
    }
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, t, changeLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};