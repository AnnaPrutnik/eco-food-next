import React from 'react';

import { Navbar, Image } from '@nextui-org/react';
import { Box } from 'components';
import { CustomNavbar } from './header.styled';

export const Header = () => {
  return (
    <Box
      as="header"
      css={{
        w: '100%',
      }}
    >
      <CustomNavbar disableShadow maxWidth="fluid">
        <Navbar.Brand>
          <Box
            css={{
              width: '83px',
              height: '32px',

              '@sm': {
                width: '93px',
                height: '36px',
              },
            }}
          >
            <Image
              src="logo.png"
              alt="logo"
              width={93}
              height={29}
              objectFit="cover"
            />
          </Box>
        </Navbar.Brand>
      </CustomNavbar>
    </Box>
  );
};
