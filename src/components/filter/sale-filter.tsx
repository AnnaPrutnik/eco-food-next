import React, { useEffect, useState } from 'react';
import { Accordion, Checkbox } from 'components';
import { useQueryParams } from 'hooks';
import { useRouter } from 'next/router';

export const SaleFilter = () => {
  const [sale, setSale] = useState<'on-sale' | null>(null);
  const { query } = useRouter();
  const {
    setValueAsPropertyToQuery,
    deletePropertyFromQuery,
    updateQueryParams,
  } = useQueryParams();

  useEffect(() => {
    if (sale) {
      setValueAsPropertyToQuery('sale', sale);
    } else {
      deletePropertyFromQuery('sale');
    }
    updateQueryParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sale]);

  useEffect(() => {
    if (sale && !query.sale) {
      setSale(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const onChangeSale = () => {
    setSale((prev) => (prev ? null : 'on-sale'));
  };
  return (
    <Accordion title="sale">
      <Checkbox
        name="sale"
        value="on Sale"
        isChecked={!!sale}
        onChange={onChangeSale}
      />
    </Accordion>
  );
};
