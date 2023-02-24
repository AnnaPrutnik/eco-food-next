import React from 'react';
import { Accordion, CheckboxGroup } from 'components';
import { forms } from './temp-db';

export const FormFilter = () => {
  return (
    <Accordion title="form">
      <CheckboxGroup options={forms} name="form" />
    </Accordion>
  );
};
