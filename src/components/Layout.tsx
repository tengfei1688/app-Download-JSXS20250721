import React, { ReactNode } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import { useTranslation } from 'next-i18next';

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
  const { t } = useTranslation('common');
  
  const pageTitle = title || t('title');
  const pageDescription = description || t('description');
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="scroll-smooth">
        {children}
        <Footer />
      </main>
      
    </>
  );
};

export default Layout; 