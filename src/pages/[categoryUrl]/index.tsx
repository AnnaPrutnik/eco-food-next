import React, { useMemo } from 'react';
import {
  Filter,
  Page,
  Box,
  CategoryTitle,
  Breadcrumbs,
  Layout,
  ProductList,
} from 'components';
import { useRouter } from 'next/router';
import { getAsString } from 'helpers';

export default function CategoryDetails() {
  const router = useRouter();

  const title = useMemo(() => {
    const categoryUrl = getAsString(router.query.categoryUrl);
    if (categoryUrl) {
      const title = categoryUrl.split('-').join(' ').toLowerCase();
      return title.charAt(0).toUpperCase() + title.slice(1);
    }
  }, [router]);

  return (
    <Layout title="Category details">
      <Page>
        <Box
          display="grid"
          gridGap="32px 64px"
          gridTemplateColumns="270px auto"
        >
          <Box></Box>
          <Box display="flex" flexDirection="column" gridGap="sp16">
            <Breadcrumbs />
            <CategoryTitle text={title} />
          </Box>

          <Filter />
          <ProductList />
        </Box>
      </Page>
    </Layout>
  );
}
