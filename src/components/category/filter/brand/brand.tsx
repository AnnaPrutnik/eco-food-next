'use client';

import { useState } from 'react';
import { Accordion } from '@/components/common/accordion';
import { BrandInput } from './brand-input';
import { OptionGroup } from '@/components/common/option-group';
import { IBrand } from '@/types';
import { QUERY } from '@/constants';

interface IBrandProps {
  data: IBrand[];
  onUpdateParams: (value: string[], type: string) => void;
}

export const Brand = ({ data: defaultBrands, onUpdateParams }: IBrandProps) => {
  const [brands, setBrands] = useState(defaultBrands);

  const onClickBrandSearch = (value: string) => {
    const normalizeValue = value.toLowerCase();
    const newBrands = defaultBrands.filter((brand) =>
      brand.name.toLowerCase().includes(normalizeValue)
    );
    setBrands(newBrands);
  };

  return (
    <Accordion title="brand" defaultOpen={true}>
      <BrandInput onChangeInput={onClickBrandSearch} />
      <OptionGroup
        name={QUERY.brand}
        options={brands}
        onChange={onUpdateParams}
      />
    </Accordion>
  );
};
