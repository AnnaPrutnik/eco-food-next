import { Accordion } from '@/components/common/accordion';
import { OptionGroup } from '@/components/common/option-group';
import { IForm } from '@/types';
import { QUERY } from '@/constants';

interface FormProps {
  data: IForm[];
  onUpdateParams: (value: string[], type: string) => void;
}

export const Form = ({ data, onUpdateParams }: FormProps) => {
  return (
    <Accordion title="form">
      <OptionGroup options={data} name={QUERY.form} onChange={onUpdateParams} />
    </Accordion>
  );
};
