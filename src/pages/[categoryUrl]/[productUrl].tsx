import React from 'react';
import { Page, Box, CategoryTitle, Breadcrumbs, Layout } from 'components';

export default function ProductDetails() {
  return (
    <Layout>
      <Page>
        <Box display="flex" flexDirection="column" gridGap="sp16">
          <Breadcrumbs />
          <CategoryTitle text="Product Details" />
        </Box>
      </Page>
    </Layout>
  );
}
