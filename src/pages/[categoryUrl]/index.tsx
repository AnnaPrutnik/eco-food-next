import { Filter, Page, Box, CategoryTitle, Breadcrumbs } from 'components';
import Head from 'next/head';

export default function CategoryDetails() {
  return (
    <>
      <Head>
        <title>Eco food</title>
        <meta name="description" content="Pets project/internet store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Box
          display="grid"
          gridGap="32px 64px"
          gridTemplateColumns="270px auto"
        >
          <Box></Box>
          <Box display="flex" flexDirection="column" gridGap="sp16">
            <Breadcrumbs />
            <CategoryTitle text="Dried fruits" />
          </Box>

          <Filter />
          <Box> List with products</Box>
        </Box>
      </Page>
    </>
  );
}
