import Head from 'next/head';

import styled from '@emotion/styled';
import { ComonC } from 'common/style';
import { useTheme } from 'next-themes';

import { signIn } from 'next-auth/react';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Next.js BoilerPlate 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HC>
        Home
        <button onClick={() => signIn()}>Login</button>
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </HC>
    </>
  );
}

const HC = styled(ComonC)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
