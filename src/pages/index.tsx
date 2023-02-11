import { Box, Filter, SearchForm } from 'components';
import Head from 'next/head';

export default function Home() {
  const onClick = () => {
    console.log('onClick');
  };

  return (
    <>
      <Head>
        <title>Eco food</title>
        <meta name="description" content="Pets project/internet store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" padding="sp64">
        <div
          style={{
            fontWeight: 400,
            fontSize: 'f14',
            lineHeight: 1.143,
            opacity: 0.5,
          }}
        >
          Homepage / Dried fruits
        </div>
        <h1>Dried fruits</h1>
        <SearchForm />
        <Filter />
      </Box>
    </>
  );
}
