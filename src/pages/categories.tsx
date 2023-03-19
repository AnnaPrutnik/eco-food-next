import { Layout } from 'components';
import { CategoriesScreen } from 'screen';
import { ICategory } from 'types';

export const getStaticProps = async () => {
	const res = await fetch(`${process.env.HOST_URL}/api/category`);
	const data = await res.json();

	return {
		props: { categories: data },
	};
};

type categoriesProps = {
	categories: ICategory[];
};

const Categories: React.FC<categoriesProps> = ({ categories }) => {
	return (
		<Layout>
			<CategoriesScreen categories={categories} />
		</Layout>
	);
};

export default Categories;
