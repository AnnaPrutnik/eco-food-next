import React, { useMemo, useState, useEffect } from 'react';
import {
  Filter,
  Page,
  Box,
  CategoryTitle,
  Breadcrumbs,
  Layout,
  ProductCatalog,
} from 'components';
import { useRouter } from 'next/router';
import { getAsString } from 'helpers';

export default function CategoryDetails() {
  const router = useRouter();
  const { query } = router;

  const title = useMemo(() => {
    const categoryUrl = getAsString(query.categoryUrl);
    if (categoryUrl) {
      const title = categoryUrl.split('-').join(' ').toLowerCase();
      return title.charAt(0).toUpperCase() + title.slice(1);
    }
  }, [query.categoryUrl]);

  return (
    <Layout title="Category details">
      <Page>
        <Box
          display={['grid']}
          gridGap={['sp16', 'sp16', '32px 64px']}
          gridTemplateColumns={['auto', 'auto', '270px auto']}
        >
          <Box display={['none', 'none', 'block']}></Box>
          <Box display="flex" flexDirection="column" gridGap="sp16">
            <Breadcrumbs />
            <CategoryTitle text={title} />
          </Box>
          <Box display={['none', 'none', 'block']}>
            <Filter />
          </Box>
          <ProductCatalog />
        </Box>
      </Page>
    </Layout>
  );
}
