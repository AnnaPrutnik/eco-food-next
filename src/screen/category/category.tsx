import { useMemo, FC } from 'react';
import { useRouter } from 'next/router';
import {
	Page,
	Box,
	Breadcrumbs,
	CategoryTitle,
	Filter,
	ProductCatalog,
} from 'components';
import { getAsString } from 'helpers';
import { ICollectionItem, ISelectItem, IPriceProps } from 'types';

interface CategoryScreenProps {
	brands: ICollectionItem[];
	form: ICollectionItem[];
	country: ICollectionItem[];
	availability: ICollectionItem[];
	sort: ISelectItem[];
	price: IPriceProps;
}

export const CategoryScreen: FC<CategoryScreenProps> = ({
	brands,
	form,
	country,
	availability,
	sort,
	price,
}) => {
	const router = useRouter();
	const { query } = router;

	const title = useMemo(() => {
		const categoryUrl = getAsString(query.categoryUrl);
		if (categoryUrl) {
			const title = categoryUrl.split('-').join(' ').toLowerCase();
			return title.charAt(0).toUpperCase() + title.slice(1);
		}
	}, [query.categoryUrl]);

	return (
		<Page>
			<Box
				display={['grid']}
				gridGap={[
					'sp16',
					'sp16',
					'32px 48px',
					'32px 48px',
					'32px 48px',
					'32px 64px',
				]}
				gridTemplateColumns={['auto', 'auto', '270px auto']}
			>
				<Box display={['none', 'none', 'block']}></Box>
				<Box display='flex' flexDirection='column' gridGap='sp16'>
					<Breadcrumbs />
					<CategoryTitle text={title} />
				</Box>
				<Box display={['none', 'none', 'block']}>
					<Filter {...{ brands, form, country, availability, price }} />
				</Box>
				<ProductCatalog sort={sort} />
			</Box>
		</Page>
	);
};
