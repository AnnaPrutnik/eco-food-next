import { Accordion } from '@/components/common/accordion';
import { OptionGroup } from '@/components/common/option-group';
import { IForm } from '@/types';
import { QUERY } from '@/constants';

interface FormProps {
  data: IForm[];
}

export const Form = ({ data }: FormProps) => {
  return (
    <Accordion title="form">
      <OptionGroup options={data} name={QUERY.form} />
    </Accordion>
  );
};
