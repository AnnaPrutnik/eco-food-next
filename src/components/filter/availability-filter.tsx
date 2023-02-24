import React from 'react';
import { Accordion, CheckboxGroup } from 'components';
import { availability } from './temp-db';

export const AvailabilityFilter = () => {
  return (
    <Accordion title="availability">
      <CheckboxGroup options={availability} name="availability" />
    </Accordion>
  );
};
