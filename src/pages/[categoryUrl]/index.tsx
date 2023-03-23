import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { Layout } from 'components';
import { CategoryScreen } from 'screen';
import { getCategories } from 'services';

export const getServerSideProps: GetServerSideProps = async context => {
	const categories = await getCategories();
	const { query } = context;
	const { categoryUrl } = query;
	const isCategoryExist = categories.find(item => item.url === categoryUrl);
	if (!isCategoryExist) {
		context.res.writeHead(307, { Location: '/404' });
		context.res.end();
	}

	return {
		props: {},
	};
};

export default function CategoryDetails() {
	return (
		<Layout title='Category details'>
			<CategoryScreen />
		</Layout>
	);
}
