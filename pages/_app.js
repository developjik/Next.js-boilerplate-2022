import { SessionProvider } from 'next-auth/react';

import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Global styles={GLOBAL_STYLE} />
      <Component {...pageProps} />
    </SessionProvider>
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

  a {
    text-decoration: none;
    color: #000;
  }
`;

export default MyApp;
