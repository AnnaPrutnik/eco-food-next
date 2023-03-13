import React from 'react';
import { Box } from 'components';
import { AppliedFilters } from './applied-filters';

export const ProductCatalog = ({ sort }) => {
	return (
		<Box>
			<AppliedFilters sort={sort} />
			<Box>List of product</Box>
		</Box>
	);
};
