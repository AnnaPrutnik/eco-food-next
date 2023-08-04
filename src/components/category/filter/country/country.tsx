import { Accordion } from '@/components/common/accordion';
import { OptionGroup } from '@/components/common/option-group';
import { ICountry } from '@/types';
import { QUERY } from '@/constants';

interface CountryProps {
  data: ICountry[];
  onUpdateParams: (value: string[], type: string) => void;
}

export const Country = ({ data, onUpdateParams }: CountryProps) => {
  return (
    <Accordion title="country">
      <OptionGroup
        options={data}
        name={QUERY.country}
        onChange={onUpdateParams}
      />
    </Accordion>
  );
};
