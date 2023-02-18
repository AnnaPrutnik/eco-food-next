import React from "react";
import Link from "next/link";
import { Box, SearchForm, CategoriesMenu } from "components";
import { Logo } from "components/svg";

export const Header = () => {
  return (
    <Box
      as="header"
      height={{ _: "64px", lg: "88px" }}
      px={{ _: "16px", lg: "48px" }}
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
