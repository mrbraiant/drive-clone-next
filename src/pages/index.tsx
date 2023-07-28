import { HomeTemplate } from '@/template/home';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Drive Clone by Braiant</title>
        <meta
          name="description"
          content="That's my drive clone project by Braiant Malta"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          // crossOrigin
        />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <HomeTemplate />
    </div>
  );
}
