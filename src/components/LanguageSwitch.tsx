import React from 'react';
import { useTranslation } from '@/contexts/I18nContext';

const LanguageSwitch: React.FC = () => {
  const { locale, changeLanguage, t } = useTranslation();

  return (
    <div className="relative inline-block">
      <select
        value={locale}
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <option value="zh-CN">{t('common.chinese')}</option>
        <option value="en">{t('common.english')}</option>
      </select>
    </div>
  );
};

export default LanguageSwitch;