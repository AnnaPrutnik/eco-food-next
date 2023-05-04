import Link from 'next/link';
import useSWR from 'swr';
import {
	Root,
	Trigger,
	Content,
	ContentItem,
	ContentLink,
	Viewport,
} from './categories-menu.styled';
import { CategoriesIcon } from 'components/svg';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ICategory } from 'types';
import { fetcher } from 'helpers';

export const CategoriesMenu: React.FC = () => {
	const { data, isLoading } = useSWR<ICategory[]>('/api/category', fetcher, {
		refreshInterval: 100000,
	});

	return (
		<Root>
			<NavigationMenu.List>
				<NavigationMenu.Item>
					<Trigger>
						<CategoriesIcon />
						Categories
					</Trigger>
					<Content>
						{!isLoading && (
							<ul>
								<ContentItem>
										<Link href="/categories" passHref legacyBehavior>
											<ContentLink>All Categories</ContentLink>
										</Link>
									</ContentItem>
								{data.map((c: ICategory) => (
									<ContentItem key={c.url}>
										<Link href={`/${c.url}`} passHref legacyBehavior>
											<ContentLink>{c.name}</ContentLink>
										</Link>
									</ContentItem>
								))}
							</ul>
						)}
					</Content>
				</NavigationMenu.Item>
			</NavigationMenu.List>

			<Viewport />
		</Root>
	);
};
