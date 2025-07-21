import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { I18nProvider } from '@/contexts/I18nContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <I18nProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </I18nProvider>
  );
}

export default App;
