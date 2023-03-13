import { useState, useEffect, FC } from 'react';
import { ICollectionItem } from 'types';
import { Checkbox } from './checkbox';
import { CheckboxList } from './checkbox.styled';
import { useQueryParams } from 'hooks';
import { useRouter } from 'next/router';

interface CheckboxGroupProps {
	name: string;
	options: ICollectionItem[];
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({ name, options }) => {
	const [checkedValues, setCheckedValues] = useState([]);
	const {
		updateQueryParams,
		setArrayAsPropertyToQuery,
		getArrayValueFromQuery,
	} = useQueryParams();
	const { query } = useRouter();

	useEffect(() => {
		setArrayAsPropertyToQuery(name, checkedValues);
		updateQueryParams();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [checkedValues]);

	useEffect(() => {
		if (query[name]) {
			const values = getArrayValueFromQuery(name);
			if (values.length !== checkedValues.length) setCheckedValues(values);
		} else if (checkedValues.length > 0 && !query[name]) {
			setCheckedValues([]);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	const onChangedCheckboxGroup = (value: string) => {
		if (checkedValues.includes(value)) {
			const newValues = checkedValues.filter(item => item !== value);
			setCheckedValues(newValues);
		} else {
			setCheckedValues(prev => [...prev, value]);
		}
	};

	return (
		<CheckboxList role='group' className='checkbox-group'>
			{options.map(item => (
				<Checkbox
					name={name}
					value={item.name}
					key={item.name}
					onChange={onChangedCheckboxGroup}
					isChecked={checkedValues.includes(item.name.toLowerCase())}
				/>
			))}
		</CheckboxList>
	);
};
