import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import DefaultLayout from '@/layouts/default';
import { ReactNode } from 'react';
import { NextPage } from 'next/types';
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary';
import Header from '@/components/Header/Header';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  Layout?: () => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <div className="root">
      <ErrorBoundary fallback="something gone wrong">
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </div>
  );
}
