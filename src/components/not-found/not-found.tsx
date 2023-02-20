import React from 'react';
import Image from 'next/image';
import { Box, NotFoundButtons } from 'components';

import { Title } from './not-found.styled';

export const NotFound = () => {
  return (
    <Box
      padding={['50px 30px', '50px 30px', '100px 0']}
      display="flex"
      gridGap={[20, 20, 48]}
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Title>Oops, this page couldn’t be found</Title>
      <Box position="relative" width={[250, 250, 466]} height={[164, 164, 306]}>
        <Image src="/404.png" alt="not found page" fill sizes="100vw" />
      </Box>

      <NotFoundButtons />
    </Box>
  );
};
