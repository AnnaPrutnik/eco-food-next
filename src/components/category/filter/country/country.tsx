import { Accordion } from '@/components/common/accordion';
import { OptionGroup } from '@/components/common/option-group';
import { ICountry } from '@/types';
import { QUERY } from '@/constants';

interface CountryProps {
  data: ICountry[];
}

export const Country = ({ data }: CountryProps) => {
  return (
    <Accordion title="country">
      <OptionGroup options={data} name={QUERY.country} />
    </Accordion>
  );
};
