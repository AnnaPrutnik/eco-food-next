import { Accordion } from '@/components/common/accordion';
import { OptionGroup } from '@/components/common/option-group';
import { IDelivery } from '@/types';
import { QUERY } from '@/constants';

interface DeliveryProps {
  data: IDelivery[];
}

export const Delivery = ({ data }: DeliveryProps) => {
  const values = data.map((item) => ({
    _id: item._id,
    name: item.description,
  }));

  return (
    <Accordion title="delivery">
      <OptionGroup options={values} name={QUERY.delivery} />
    </Accordion>
  );
};
