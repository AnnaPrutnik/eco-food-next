import { Accordion } from '@/components/common/accordion';
import { OptionGroup } from '@/components/common/option-group';
import { IAvailability } from '@/types';
import { QUERY } from '@/constants';

interface AvailabilityProps {
  data: IAvailability[];
  onUpdateParams: (value: string[], type: string) => void;
}

export const Availability = ({ data, onUpdateParams }: AvailabilityProps) => {
  return (
    <Accordion title="availability">
      <OptionGroup
        options={data}
        name={QUERY.availability}
        onChange={onUpdateParams}
      />
    </Accordion>
  );
};
