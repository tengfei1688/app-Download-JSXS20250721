import React, { ReactNode } from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import Footer from './Footer';
import LanguageSwitcher from './LanguageSwitcher';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title,
  description
}) => {
  const { t } = useTranslation();
  
  const pageTitle = title || t('layout.title');
  const pageDescription = description || t('layout.description');

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="scroll-smooth">
        {/* Language Switcher - Fixed Position */}
        <div className="fixed top-4 right-4 z-50">
          <LanguageSwitcher />
        </div>

        {/* <Header /> */}
        {children}
        <Footer />
      </main>
      
    </>
  );
};

export default Layout; 