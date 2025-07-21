import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Screenshots from '@/components/Screenshots';
import HowToUse from '@/components/HowToUse';
import Download from '@/components/Download';
import Contact from '@/components/Contact';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

export default function Home() {
  return (
    <Layout>
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'zh', ['common'])),
    },
  };
};
