import React from 'react';
import Image from 'next/image';
import { Box, NotFoundButtons } from 'components';

import { Title, StyledImage } from './not-found.styled';

export const NotFound = () => {
  return (
    <Box
      padding={{ xs: '50px 30px', md: '100px 0' }}
      display="flex"
      gridGap={{ xs: 20, md: 48 }}
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Title>Oops, this page couldn’t be found</Title>
      <Box
        position="relative"
        width={{ xs: 250, md: 466 }}
        height={{ xs: 164, md: 306 }}
      >
        <Image src="/404.png" alt="not found page" fill sizes="100vw" />
      </Box>

      <NotFoundButtons />
    </Box>
  );
};
