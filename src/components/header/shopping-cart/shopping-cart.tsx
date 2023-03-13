import {
	Root,
	Trigger,
	Portal,
	Overlay,
	Content,
	Title,
} from './shopping-cart.styled';
import { CartIcon } from 'components/svg';
import { Box } from 'components';

interface ICart {
	total: number;
}

export const ShoppingCart: React.FC<ICart> = ({ total }) => {
	return (
		<Root>
			<Trigger>
				<CartIcon />
				<Box display={['none', 'none', 'flex', 'flex']}>Cart: {total}</Box>
			</Trigger>
			<Portal>
				<Overlay />
				<Content>
					<Title>My shopping cart:</Title>
				</Content>
			</Portal>
		</Root>
	);
};
