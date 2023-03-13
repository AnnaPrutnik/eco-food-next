import Link from 'next/link';
import { Box } from 'components';
import { CategoriesMenu } from './categories-menu';
import { MobileMenu } from './mobile-menu';
import { SearchForm } from './search-form';
import { ShoppingCart } from './shopping-cart';
import { SearchBtn } from './search-btn';
import { User } from './user';
import { UserBonus } from './user-bonus';
import { Logo } from 'components/svg';

const user = {
	name: 'Julia',
	lastName: 'Roberts',
	eMail: 'julia.roberts@gmail.com',
};

export const Header = () => {
	return (
		<Box
			as='header'
			height={['64px', '64px', '64px', '88px']}
			px={['16px', '16px', '16px', '24px', '48px']}
			display='flex'
			alignItems='center'
			justifyContent='space-between'
		>
			<Box display='flex' alignItems='center' gridGap='40px'>
				<Link href='/'>
					<Logo />
				</Link>
				<Box display={['none', 'none', 'block', 'block']}>
					<SearchForm />
				</Box>
				<CategoriesMenu />
			</Box>

			<Box
				display='flex'
				alignItems='center'
				gridGap={['24px', '32px', '32px', '32px', '40px']}
			>
				<SearchBtn />
				<UserBonus bonus={15} />
				<User user={user} />
				<ShoppingCart total={6} />
				<MobileMenu />
			</Box>
		</Box>
	);
};
