import { Accordion } from '@/components/common/accordion';
import { OptionGroup } from '@/components/common/option-group';
import { IAvailability } from '@/types';
import { QUERY } from '@/constants';

interface AvailabilityProps {
  data: IAvailability[];
}

export const Availability = ({ data }: AvailabilityProps) => {
  return (
    <Accordion title="availability">
      <OptionGroup options={data} name={QUERY.availability} />
    </Accordion>
  );
};
