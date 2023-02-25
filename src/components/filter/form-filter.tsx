import React from 'react';
import { Accordion, CheckboxGroup } from 'components';

interface FormFilterProps {
  data: {
    id: number;
    name: string;
  }[];
}

export const FormFilter: React.FC<FormFilterProps> = ({ data: forms }) => {
  return (
    <Accordion title="form">
      <CheckboxGroup options={forms} name="form" />
    </Accordion>
  );
};
