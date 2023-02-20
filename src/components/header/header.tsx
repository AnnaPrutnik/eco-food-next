import React from 'react';
import Link from 'next/link';
import { Box, SearchForm, CategoriesMenu } from 'components';
import { Logo } from 'components/svg';

export const Header = () => {
  return (
    <Box
      as="header"
      height={['64px', '64px', '64px', '88px']}
      px={['16px', '16px', '16px', '48px']}
      display="flex"
      alignItems="center"
    >
      <Box display="flex" alignItems="center" gridGap="40px">
        <Link href="/">
          <Logo />
        </Link>
        <SearchForm />
        <CategoriesMenu />
      </Box>
    </Box>
  );
};
