import React, { useState } from 'react';
import { brands as defaultBrands } from './temp-db';

import { Accordion, BrandFilterInput, CheckboxGroup } from 'components';

export const BrandFilter = () => {
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
      <BrandFilterInput name="brandFilter" onChangeInput={onClickBrandSearch} />
      <CheckboxGroup options={brands} name="brands" />
    </Accordion>
  );
};
