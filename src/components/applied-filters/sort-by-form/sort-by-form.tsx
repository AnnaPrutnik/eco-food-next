import { useState, FC } from 'react';
import { useQueryParams } from 'hooks';
import { ISelectItem } from 'types';
import { QUERY } from 'utils/constans';
import { SingleValue } from 'react-select';
import { Form, SortSelect, Label } from './sort-by-form.styled';

interface SortByFormProps {
	options: ISelectItem[];
}

export const SortByForm: FC<SortByFormProps> = ({ options }) => {
	const {
		updateQueryParams,
		getStringValueFromQuery,
		setValueAsPropertyToQuery,
	} = useQueryParams();
	const query = getStringValueFromQuery(QUERY.sort);

	const [sortBy, setSortBy] = useState(() => {
		if (query) {
			const value = options.find(option => option.value === query);
			return value ? value : options[0];
		}
		return options[0];
	});

	const onChangeValue = (newValue: SingleValue<ISelectItem>) => {
		if (newValue) {
			setSortBy(newValue);
			setValueAsPropertyToQuery(QUERY.sort, newValue.value);
			updateQueryParams();
		}
	};

	return (
		<Form>
			<Label id='sort-by-label' htmlFor='sort-by-input' mr='sp16'>
				Sort by
			</Label>
			<SortSelect
				options={options}
				defaultValue={sortBy}
				isSearchable={false}
				isClearable={false}
				isMulti={false}
				onChange={onChangeValue}
				aria-labelledby='sort-by-label'
				inputId='sort-by-input'
				classNamePrefix='sort-select'
			/>
		</Form>
	);
};
