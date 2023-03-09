import React from 'react';
import Image from 'next/image';

import spinner from './spinner.svg';

export const Loader = () => {
  return <Image src={spinner.src} alt="loader" width={200} height={200} />;
};
