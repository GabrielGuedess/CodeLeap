import { DefaultSeo } from 'next-seo';
import { type AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'styles/global';
import { theme } from 'styles/theme';

import SEO from '../../next-seo.config';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>CodeLeap | Network</title>
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-512.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#DDDDDD" />
      <meta
        name="description"
        content="The goal is to create a very simple application that will perform basic CRUD functions."
      />
    </Head>
    <GlobalStyles />
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
