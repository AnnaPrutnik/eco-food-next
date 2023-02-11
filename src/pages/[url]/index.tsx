import React from 'react';
import { useRouter } from 'next/router';

const Category = () => {
  const router = useRouter();
  const params = router.pathname;

  return <div>{params}</div>;
};

export default Category;
