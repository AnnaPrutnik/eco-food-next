'use client';
import { useSearchParams } from 'next/navigation';
import { Accordion } from '@/components/common/accordion';
import { Checkbox } from '@/components/common/checkbox';
import { useCustomParams } from '@/hooks';
import { QUERY } from '@/constants';
import { useMemo } from 'react';

const VALUE = 'on-sale';

export const Sale = () => {
  const { removePropertyFromParams, setNewSearchParams } = useCustomParams();

  const searchParams = useSearchParams();
  const query = searchParams.get(QUERY.sale);
  const sale = useMemo(() => (query ? VALUE : null), [query]);
  const onChangeSale = () => {
    if (sale) {
      removePropertyFromParams(QUERY.sale);
    } else {
      setNewSearchParams(QUERY.sale, VALUE);
    }
  };
  return (
    <Accordion title="sale">
      <Checkbox checked={!!sale} onChange={onChangeSale} value="On Sale" />
    </Accordion>
  );
};
