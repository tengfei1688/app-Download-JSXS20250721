import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const toggleLanguage = () => {
    const newLocale = router.locale === 'zh' ? 'en' : 'zh';
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 bg-white bg-opacity-20 text-white rounded-md hover:bg-opacity-30 transition-all duration-200 text-sm font-medium border border-white border-opacity-30 hover:border-opacity-50"
      title={`Switch to ${t('language.switch')}`}
    >
      {t('language.switch')}
    </button>
  );
};

export default LanguageSwitcher;