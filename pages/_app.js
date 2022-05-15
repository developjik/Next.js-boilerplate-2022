import { SessionProvider } from 'next-auth/react';

import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system">
      <SessionProvider session={pageProps.session}>
        <Global styles={GLOBAL_STYLE} />
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}

const GLOBAL_STYLE = css`
  ${emotionReset}

  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  :root {
    --background: #fff;
    --foreground: #000;
  }

  [data-theme='dark'] {
    --background: #000;
    --foreground: #fff;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

export default MyApp;
