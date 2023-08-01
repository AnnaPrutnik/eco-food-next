'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

interface PriceProps {
  min: number;
  max: number;
}

export const Price = ({ min, max }: PriceProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createNewSearchParams = (name: string, value: number) => {
    const param = { [name]: value.toString() };
    const newParam = new URLSearchParams(param);
    return newParam.toString();
  };

  const minPrice = searchParams.get('price_min');
  const maxPrice = searchParams.get('price_max');

  useEffect(() => {
    let newSearchParams = '';
    if (!minPrice) {
      const minPriceParam = createNewSearchParams('price_min', min);
      newSearchParams += minPriceParam;
    }

    if (!maxPrice) {
      const maxPriceParam = createNewSearchParams('price_max', max);
      const divider = newSearchParams === '' ? '' : '&';
      newSearchParams = newSearchParams + divider + maxPriceParam;
    }

    if (newSearchParams === '') {
      return;
    }

    const divider = searchParams.toString() === '' ? '' : '&';
    newSearchParams = searchParams.toString() + divider + newSearchParams;

    router.push(pathname + '?' + newSearchParams);
  }, [searchParams]);

  return <div>price</div>;
};
