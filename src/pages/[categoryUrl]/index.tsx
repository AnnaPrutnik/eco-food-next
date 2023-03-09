import React, { useMemo } from 'react';
import dbConnect from 'utils/db';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import {
	Filter,
	Page,
	Box,
	CategoryTitle,
	Breadcrumbs,
	Layout,
	ProductCatalog,
} from 'components';
import { useRouter } from 'next/router';
import { getAsString, getDataFromDbModel } from 'helpers';
import {
	brandService,
	formService,
	countryService,
	availabilityService,
	sortService,
} from 'services';

export const getServerSideProps = async () => {
	await dbConnect();
	// const brands = await getDataFromDbModel(BrandModel);
	const brands = await brandService.getSerializedAll();
	const form = await formService.getSerializedAll();
	const country = await countryService.getSerializedAll();
	const availability = await availabilityService.getSerializedAll();
	const sort = await sortService.getSerializedAll();
	const price = {
		min: 10,
		max: 500,
	};

	return {
		props: {
			brands,
			form,
			country,
			availability,
			sort,
			price,
		},
	};
};

export default function CategoryDetails({
	brands,
	form,
	country,
	availability,
	sort,
	price,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
		<Layout title='Category details'>
			<Page>
				<Box
					display={['grid']}
					gridGap={['sp16', 'sp16', '32px 64px']}
					gridTemplateColumns={['auto', 'auto', '270px auto']}
				>
					<Box display={['none', 'none', 'block']}></Box>
					<Box display='flex' flexDirection='column' gridGap='sp16'>
						<Breadcrumbs />
						<CategoryTitle text={title} />
					</Box>
					<Box display={['none', 'none', 'block']}>
						<Filter
							filterData={{ brands, form, country, availability, price }}
						/>
					</Box>
					<ProductCatalog sort={sort} />
				</Box>
			</Page>
		</Layout>
	);
}
