import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import {
  Box,
  CategoriesBtn,
  IconButton,
  SearchIcon,
  CartIcon,
  MenuIcon,
  SearchForm,
  CartButton,
} from 'components';
import {
  HeaderContainer,
  HeaderPartWrapper,
  HeaderDivider,
} from './header.styled';
import logo from '../../../public/logo.png';

export const Header = () => {
  const onClickSearchBtn = () => {
    console.log('onClick Search Button');
  };

  const onClickCategoriesBtn = () => {
    console.log('onClick Categories Button');
  };

  const onClickCartBtn = () => {
    console.log('onClick Cart Button');
  };

  const onClickMobileMenuBtn = () => {
    console.log('onClick Mobile Menu Button');
  };

  return (
    <HeaderContainer>
      <HeaderPartWrapper>
        <Box width={{ xs: '83px', lg: '93px' }}>
          <Link href='/'>
            <Image alt='logo' src={logo} sizes='100vw' />
          </Link>
        </Box>
        <Box display={{ xs: 'none', md: 'block' }}>
          <SearchForm />
        </Box>
        <Box display={{ xs: 'none', lg: 'block' }}>
          <CategoriesBtn title='categories' onClickBtn={onClickCategoriesBtn} />
        </Box>
      </HeaderPartWrapper>
      <HeaderPartWrapper>
        <Box
          display={{ xs: 'flex', md: 'none' }}
          alignItems='center'
          justifyContent='flex-start'
        >
          <IconButton
            icon={<SearchIcon />}
            onClickBtn={onClickSearchBtn}
            label='search'
          />
          <HeaderDivider />
        </Box>
        <Box
          display={{ xs: 'flex', lg: 'none' }}
          alignItems='center'
          justifyContent='flex-start'
        >
          <IconButton
            icon={<CartIcon />}
            onClickBtn={onClickCartBtn}
            label='cart'
          />
          <HeaderDivider />
        </Box>
        <Box display={{ xs: 'none', lg: 'block' }}>
          <CartButton title='cart' onClickBtn={onClickCartBtn} />
        </Box>
        <Box display={{ lg: 'none' }}>
          <IconButton
            icon={<MenuIcon />}
            onClickBtn={onClickMobileMenuBtn}
            label='mobile menu'
          />
        </Box>
      </HeaderPartWrapper>
    </HeaderContainer>
  );
};
