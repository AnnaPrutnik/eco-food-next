import { FC, useState } from 'react';
import { Accordion } from 'components';
import { OptionGroup } from '../options-group';
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
			brand.title.toLowerCase().includes(normalizeValue)
		);
		setBrands(newBrands);
	};

	return (
		<Accordion title='brand' defaultOpen={true}>
			<BrandFilterInput name='brandFilter' onChangeInput={onClickBrandSearch} />
			<OptionGroup options={brands} name='brands' />
		</Accordion>
	);
};
