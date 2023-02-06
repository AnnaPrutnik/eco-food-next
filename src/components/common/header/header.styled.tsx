import { Navbar, styled } from '@nextui-org/react';

export const CustomNavbar = styled(Navbar, {
  '& .nextui-navbar-container': {
    background: 'transparent !important',
    minHeight: '64px !important',
    height: '64px !important',

    '@': {
      minHeight: '88px !important',
      height: '88px !important',
    },
  },
});
