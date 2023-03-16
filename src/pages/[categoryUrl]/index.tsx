import dbConnect from 'utils/db';
import { useInitialDataContext } from 'context';

import { InferGetServerSidePropsType } from 'next';
import { Layout } from 'components';
import { CategoryScreen } from 'screen';
import {
	brandService,
	formService,
	countryService,
	availabilityService,
	sortService,
} from 'services';
import { useEffect } from 'react';

export const getServerSideProps = async () => {
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

export default function CategoryDetails(
	props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
	const { setFilterValues } = useInitialDataContext();

	useEffect(() => {
		setFilterValues(props);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Layout title='Category details'>
			<CategoryScreen />
		</Layout>
	);
}
