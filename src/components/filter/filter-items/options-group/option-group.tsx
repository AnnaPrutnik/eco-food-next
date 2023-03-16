import { FC } from 'react';
import { ScrollArea, Checkbox } from 'components';
import { ICollectionItem } from 'types';
import { useQueryParamsState } from 'hooks';
import { OptionList } from './option-group.styled';

interface CheckboxGroupProps {
	options: ICollectionItem[];
	name: string;
}

export const OptionGroup: FC<CheckboxGroupProps> = ({ options, name }) => {
	const { values, changeValues } = useQueryParamsState(name);

	return (
		<ScrollArea maxHeight={200}>
			<OptionList role='group'>
				{options.map(item => {
					const title = item.title.toLowerCase();
					return (
						<li key={title}>
							<Checkbox
								value={title}
								onChange={changeValues}
								defaultChecked={values.includes(title)}
							/>
						</li>
					);
				})}
			</OptionList>
		</ScrollArea>
	);
};
