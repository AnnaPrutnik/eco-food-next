import { FC, useState } from 'react';
import { Accordion, CheckboxGroup } from 'components';
import { BrandFilterInput } from './brand-input';
import { ICollectionItem } from 'types';

interface BrandFilterProps {
	data: ICollectionItem[];
}

export const BrandFilter: FC<BrandFilterProps> = ({ data: defaultBrands }) => {
	const [brands, setBrands] = useState(defaultBrands);

	const onClickBrandSearch = (value: string) => {
		const normalizeValue = value.toLowerCase();
		const newBrands = defaultBrands.filter(brand =>
			brand.name.toLowerCase().includes(normalizeValue)
		);
		setBrands(newBrands);
	};
	return (
		<Accordion title='brand' defaultOpen={true}>
			<BrandFilterInput name='brandFilter' onChangeInput={onClickBrandSearch} />
			<CheckboxGroup options={brands} name='brands' />
		</Accordion>
	);
};
