import React from 'react';
import { Accordion, CheckboxGroup } from 'components';

interface AvailabilityFilterProps {
  data: {
    id: number;
    name: string;
  }[];
}

export const AvailabilityFilter: React.FC<AvailabilityFilterProps> = ({
  data: availability,
}) => {
  return (
    <Accordion title="availability">
      <CheckboxGroup options={availability} name="availability" />
    </Accordion>
  );
};
