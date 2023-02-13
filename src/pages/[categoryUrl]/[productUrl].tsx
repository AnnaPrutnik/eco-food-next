import React from 'react';
import { Page, Box, CategoryTitle, Breadcrumbs } from 'components';
import Head from 'next/head';

const ProductDetails = () => {
  return (
    <>
      <Head>
        <title>Eco food</title>
        <meta name="description" content="Pets project/internet store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Box display="flex" flexDirection="column" gridGap="sp16">
          <Breadcrumbs />
          <CategoryTitle text="Product Details" />
        </Box>
      </Page>
    </>
  );
};

export default ProductDetails;
