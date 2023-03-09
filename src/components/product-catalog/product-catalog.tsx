import React from 'react';
import { Box, AppliedFilters } from 'components';

export const ProductCatalog = ({ sort }) => {
	return (
		<Box>
			<AppliedFilters sort={sort} />
			<Box>List of product</Box>
		</Box>
	);
};
