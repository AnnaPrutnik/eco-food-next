import React, { useState } from 'react';
import { Accordion, BrandFilterInput, CheckboxGroup } from 'components';

interface BrandFilterProps {
  data: {
    id: number;
    name: string;
  }[];
}

export const BrandFilter: React.FC<BrandFilterProps> = ({
  data: defaultBrands,
}) => {
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
