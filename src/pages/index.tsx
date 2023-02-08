import { Box, CategoryBtn } from 'components';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eco food</title>
        <meta name="description" content="Pets project/internet store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main">
        <h1>Eco food</h1>
        <CategoryBtn />
      </Box>
    </>
  );
}
