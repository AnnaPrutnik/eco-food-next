import React, { useMemo } from 'react';
import { Accordion, Checkbox } from 'components';
import { useQueryParams } from 'hooks';
import { QUERY } from 'utils/constans';

export const SaleFilter = () => {
	const {
		setValueAsPropertyToQuery,
		deletePropertyFromQuery,
		updateQueryParams,
		getStringValueFromQuery,
	} = useQueryParams();
	const query = getStringValueFromQuery(QUERY.sale);

	const sale = useMemo(() => (query ? 'on-sale' : null), [query]);

	const onChangeSale = () => {
		if (sale) {
			deletePropertyFromQuery(QUERY.sale);
		} else {
			setValueAsPropertyToQuery(QUERY.sale, 'on-sale');
		}
		updateQueryParams();
	};

	return (
		<Accordion title='sale'>
			<Checkbox checked={!!sale} onChange={onChangeSale} value='On Sale' />
		</Accordion>
	);
};
