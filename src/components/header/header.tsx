import React from "react";
import Link from "next/link";
import {
  Box,
  SearchForm,
  CategoriesMenu,
  ShoppingCart,
  UserBonus,
  User,
  MobileMenu,
  SearchBtn,
} from "components";
import { Logo } from "components/svg";

export const Header = () => {
  return (
    <Box
      as="header"
      height={["64px", "64px", "64px", "88px"]}
      px={["16px", "16px", "16px", "24px", "48px"]}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center" gridGap="40px">
        <Link href="/">
          <Logo />
        </Link>
        <Box display={["none", "none", "block", "block"]}>
          <SearchForm />
        </Box>
        <CategoriesMenu />
      </Box>

      <Box
        display="flex"
        alignItems="center"
        gridGap={["24px", "32px", "32px", "32px", "40px"]}
      >
        <SearchBtn />
        <UserBonus bonus={15} />
        <User name="Julia" />
        <ShoppingCart total={6} />
        <MobileMenu />
      </Box>
    </Box>
  );
};
