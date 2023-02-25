import React from 'react';
import { Accordion, CheckboxGroup } from 'components';

interface CountryFilterProps {
  data: {
    value: string;
    label: string;
  }[];
}

export const CountryFilter: React.FC<CountryFilterProps> = ({
  data: country,
}) => {
  const normalizedCountry = country.map((item, index) => ({
    id: index + 1,
    name: item.label,
  }));

  return (
    <Accordion title="country">
      <CheckboxGroup options={normalizedCountry} name="country" />
    </Accordion>
  );
};
