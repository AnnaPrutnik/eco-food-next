import React, { useEffect, useState } from 'react';
import { Accordion, Checkbox } from 'components';
import { useQueryParams } from 'hooks';

export const SaleFilter = () => {
	const {
		setValueAsPropertyToQuery,
		deletePropertyFromQuery,
		updateQueryParams,
		getStringValueFromQuery,
	} = useQueryParams();

	const [sale, setSale] = useState<'on-sale' | null>(() => {
		const query = getStringValueFromQuery('sale');
		return query ? 'on-sale' : null;
	});

	useEffect(() => {
		if (sale) {
			setValueAsPropertyToQuery('sale', sale);
		} else {
			deletePropertyFromQuery('sale');
		}
		updateQueryParams();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sale]);

	const onChangeSale = () => {
		setSale(prev => (prev ? null : 'on-sale'));
	};

	return (
		<Accordion title='sale'>
			<Checkbox
				defaultChecked={!!sale}
				onChange={onChangeSale}
				value='On Sale'
			/>
		</Accordion>
	);
};
