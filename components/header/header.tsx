import React from 'react';
import Image from 'next/image';
import { Box, Field } from '../common';
import search from 'public/svg/search.svg';

const Header = () => {
  const onClickSearchBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(e.target);
  };

  return (
    <Box as='header' height='88px' px='48px' py='22px'>
      <Box width='350px'>
        <Field
          width='270px'
          border='none'
          type='input'
          hasIcon={true}
          onClickIcon={onClickSearchBtn}
        >
          <Image src={search} alt='search btn' width={18} height={18} />
        </Field>
      </Box>
    </Box>
  );
};

export default Header;
