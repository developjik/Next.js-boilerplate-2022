import Head from 'next/head'

import styled from '@emotion/styled'
import { ComonC } from 'common/style'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js BoilerPlate 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HC>Home</HC>
    </>
  )
}

const HC = styled(ComonC)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
