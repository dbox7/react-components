import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import DefaultLayout from '@/layouts/default';

export default function App({ Component, pageProps }: AppProps) {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
