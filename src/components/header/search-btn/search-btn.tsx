import { Root, Trigger, Portal, Content } from './search-btn.styled';
import { SearchIcon } from 'components/svg';
import { SearchForm } from '../search-form';

export const SearchBtn = () => {
	return (
		<Root>
			<Trigger>
				<SearchIcon size={24} />
			</Trigger>
			<Portal>
				<Content>
					<SearchForm />
				</Content>
			</Portal>
		</Root>
	);
};
