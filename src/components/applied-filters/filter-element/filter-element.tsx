import React from 'react';
import { ExitIcon } from 'components/svg';
import { useQueryParams } from 'hooks';
import { Value } from '../applied-filters';
import {
	FilterValue,
	FilterTitle,
	FilterItem,
	DeleteBtn,
} from './filter-element.styled';
import { QUERY } from 'utils/constans';

interface FilterElementProps {
	value: Value;
}

export const FilterElement: React.FC<FilterElementProps> = ({ value }) => {
	const {
		getArrayValueFromQuery,
		setArrayAsPropertyToQuery,
		updateQueryParams,
		deletePropertyFromQuery,
	} = useQueryParams();

	const onCLickDeleteFilterValue = (e: React.MouseEvent<HTMLButtonElement>) => {
		const title = e.currentTarget.dataset.title;
		const value = e.currentTarget.dataset.value;
		if (title && value) {
			if (title === QUERY.price) {
				deletePropertyFromQuery(title);
				updateQueryParams();
				return;
			}
			const queryValue = getArrayValueFromQuery(title);
			if (queryValue) {
				const currentValue = queryValue.filter(item => item !== value);
				setArrayAsPropertyToQuery(title, currentValue);
				updateQueryParams();
			}
		}
	};

	return (
		<>
			{value[1].map(prop => (
				<FilterItem key={prop}>
					<FilterTitle>{value[0]}:</FilterTitle>
					<FilterValue>{prop}</FilterValue>
					<DeleteBtn
						aria-label='delete filter value'
						data-title={value[0]}
						data-value={prop}
						onClick={onCLickDeleteFilterValue}
					>
						<ExitIcon />
					</DeleteBtn>
				</FilterItem>
			))}
		</>
	);
};
