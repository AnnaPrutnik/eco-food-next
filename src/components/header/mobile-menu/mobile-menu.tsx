import { useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { fetcher } from 'helpers';
import { Box } from 'components';
import { MenuIcon, ExitIcon, Logo } from 'components/svg';
import { ICategory } from 'types';
import {
	Root,
	Trigger,
	Portal,
	Overlay,
	Content,
	Close,
	List,
	Item,
	CategoryLink,
} from './mobile-menu.styled';
import { theme } from 'theme';

export const MobileMenu: React.FC = () => {
	const [isOpen, setOpen] = useState(false);
	const { data, isLoading } = useSWR<ICategory[]>('/api/category', fetcher);

	return (
		<Root open={isOpen} onOpenChange={() => setOpen(!isOpen)}>
			<Trigger>
				<MenuIcon />
			</Trigger>
			<Portal>
				<Overlay>
					<Content>
						<Box
							display='flex'
							alignItems='center'
							justifyContent='space-between'
							px='7px'
							py='5px'
							backgroundColor={theme.colors.lightBackground}
						>
							<Link href='/'>
								<Logo />
							</Link>
							<Close>
								<ExitIcon />
							</Close>
						</Box>
						{data && (
							<List>
								<Item>
									<Link href='/categories' passHref legacyBehavior>
										<CategoryLink onClick={() => setOpen(!isOpen)}>
											All Categories
										</CategoryLink>
									</Link>
								</Item>
								{data.map((c: ICategory) => (
									<Item key={c.url}>
										<Link href={`/${c.url}`} passHref legacyBehavior>
											<CategoryLink onClick={() => setOpen(!isOpen)}>
												{c.name}
											</CategoryLink>
										</Link>
									</Item>
								))}
							</List>
						)}
					</Content>
				</Overlay>
			</Portal>
		</Root>
	);
};
