import { Accordion } from '@/components/common/accordion';
import { OptionGroup } from '@/components/common/option-group';
import { IDelivery } from '@/types';
import { QUERY } from '@/constants';

interface DeliveryProps {
  data: IDelivery[];
  onUpdateParams: (value: string[], type: string) => void;
}

export const Delivery = ({ data, onUpdateParams }: DeliveryProps) => {
  const values = data.map((item) => ({
    _id: item._id,
    name: item.description,
  }));

  return (
    <Accordion title="delivery">
      <OptionGroup
        options={values}
        name={QUERY.delivery}
        onChange={onUpdateParams}
      />
    </Accordion>
  );
};
