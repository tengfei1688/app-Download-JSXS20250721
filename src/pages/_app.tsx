import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import '@/i18n'; // Initialize i18n

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
