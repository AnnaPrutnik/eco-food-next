'use client';

import { Accordion } from '@/components/common/accordion';
import { BrandInput } from './brand-input';
import { BrandList } from './brand-list';

export const Brand = () => {
  const onSearchBrands = (value: string) => {
    console.log(value);
  };

  return (
    <Accordion title="Brand" defaultOpen={true}>
      <BrandInput onChangeInput={onSearchBrands} />
      <BrandList />
    </Accordion>
  );
};
