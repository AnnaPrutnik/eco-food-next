import { InferGetServerSidePropsType, InferGetStaticPropsType } from 'next';
import { Layout } from 'components';
import { CategoryScreen } from 'screen';
import {
	getCategories,
	brandService,
	formService,
	countryService,
	availabilityService,
	sortService,
} from 'services';
import dbConnect from 'utils/db';
import dbProducts from 'utils/product.json';
import { SWRConfig } from 'swr';
import { IProduct } from 'types';

export async function getStaticProps() {
	await dbConnect();
	const brands = await brandService.getSerializedAll();
	const form = await formService.getSerializedAll();
	const country = await countryService.getSerializedAll();
	const availability = await availabilityService.getSerializedAll();
	const sort = await sortService.getSerializedAll();
	const price = {
		min: 10,
		max: 500,
	};

	const filters = { brands, form, country, availability, sort, price };
	const products = dbProducts as IProduct[];
	return {
		props: {
			fallback: {
				'/api/filter': filters,
				'/api/products': products,
			},
		},
		revalidate: 86400, // One time per day
	};
}

export async function getStaticPaths() {
	const categories = await getCategories();

	const paths = categories.map(category => ({
		params: { categoryUrl: category.url },
	}));

	return { paths, fallback: 'blocking' };
}

export default function CategoryDetails({
	fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout title='Category details'>
			<SWRConfig value={{ fallback }}>
				<CategoryScreen />
			</SWRConfig>
		</Layout>
	);
}
