import { InferGetStaticPropsType } from 'next';
import { Layout } from 'components';
import { CategoriesScreen } from 'screen';
import { getCategories } from 'services';

export const getStaticProps = async () => {
	//get categories from server
	const categories = await getCategories();

	//get data from MongoDB
	// await dbConnect();
	// const data = await categoryService.getSerializedAll()

	return {
		props: { categories },
	};
};

const Categories: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
	categories,
}) => {
	return (
		<Layout>
			<CategoriesScreen categories={categories} />
		</Layout>
	);
};

export default Categories;
