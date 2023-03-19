import dbConnect from 'utils/db';
import { Layout } from 'components';
import { CategoriesScreen } from 'screen';
import { ICategory } from 'types';
import { categoryService } from 'services';

export const getStaticProps = async () => {
	await dbConnect();

	const data = await categoryService.getSerializedAll()

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
