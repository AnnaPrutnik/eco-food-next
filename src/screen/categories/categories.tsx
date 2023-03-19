import Link from 'next/link';
import { ICategory } from 'types';
import { Box, Page } from 'components';
import { CardList, Card, Title, Button } from './categories.styled';

type categoriesProps = {
	categories: ICategory[];
};

export const CategoriesScreen: React.FC<categoriesProps> = ({ categories }) => {
	return (
		<Page>
			<CardList>
				{categories.map(c => (
					<Card key={c.url} bgImg={c.image}>
						<Title>{c.title}</Title>
						<Link href={`/${c.url}`} passHref legacyBehavior>
							<Button>View products</Button>
						</Link>
					</Card>
				))}
			</CardList>
		</Page>
	);
};
