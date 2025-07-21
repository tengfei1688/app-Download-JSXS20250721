import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Screenshots from '@/components/Screenshots';
import HowToUse from '@/components/HowToUse';
import Download from '@/components/Download';
import Contact from '@/components/Contact';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout title={t('layout.title')}>
      <Hero />
      <About />
      <Features />
      <Screenshots />
      <HowToUse />
      <Download />
      <Contact />
    </Layout>
  );
}
