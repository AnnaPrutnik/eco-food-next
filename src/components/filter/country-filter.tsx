import React from 'react';
import { Accordion, CheckboxGroup } from 'components';
import { country } from './temp-db';

export const CountryFilter = () => {
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
