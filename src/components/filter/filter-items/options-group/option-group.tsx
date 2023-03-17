import { FC, useState, useEffect, useMemo } from 'react';
import { ScrollArea, Checkbox } from 'components';
import { ICollectionItem } from 'types';
import { useQueryParams } from 'hooks';
import { OptionList } from './option-group.styled';

interface CheckboxGroupProps {
	options: ICollectionItem[];
	name: string;
}

export const OptionGroup: FC<CheckboxGroupProps> = ({ options, name }) => {
	const {
		getArrayValueFromQuery,
		setArrayAsPropertyToQuery,
		deletePropertyFromQuery,
		updateQueryParams,
	} = useQueryParams();
	const query = getArrayValueFromQuery(name);

	const values = useMemo(() => (query ? query : []), [query]);

	const changeValues = (value: string) => {
		let newValues: string[];
		if (values.includes(value)) {
			newValues = values.filter(item => item !== value);
		} else {
			newValues = [...values, value];
		}
		if (newValues.length > 0) {
			setArrayAsPropertyToQuery(name, newValues);
		} else {
			deletePropertyFromQuery(name);
		}
		updateQueryParams();
	};

	return (
		<ScrollArea maxHeight={200}>
			<OptionList role='group'>
				{options.map(item => {
					const title = item.title.toLowerCase();
					const isChecked = values.includes(title);
					return (
						<li key={title}>
							<Checkbox
								value={title}
								onChange={changeValues}
								checked={isChecked}
							/>
						</li>
					);
				})}
			</OptionList>
		</ScrollArea>
	);
};
