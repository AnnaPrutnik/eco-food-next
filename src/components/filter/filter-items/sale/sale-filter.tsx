import React, { useMemo } from 'react';
import { Accordion, Checkbox } from 'components';
import { useQueryParams } from 'hooks';

export const SaleFilter = () => {
	const {
		setValueAsPropertyToQuery,
		deletePropertyFromQuery,
		updateQueryParams,
		getStringValueFromQuery,
	} = useQueryParams();
	const query = getStringValueFromQuery('sale');

	const sale = useMemo(() => (query ? 'on-sale' : null), [query]);

	const onChangeSale = () => {
		if (sale) {
			deletePropertyFromQuery('sale');
		} else {
			setValueAsPropertyToQuery('sale', 'on-sale');
		}
		updateQueryParams();
	};

	return (
		<Accordion title='sale'>
			<Checkbox checked={!!sale} onChange={onChangeSale} value='On Sale' />
		</Accordion>
	);
};
