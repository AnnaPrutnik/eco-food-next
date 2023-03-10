import { SearchIcon } from 'components/svg';
import { SearchButton } from './buttons.styled';

export const SearchInputBtn = () => {
	return (
		<SearchButton type='button' aria-label='search icon button'>
			<SearchIcon />
		</SearchButton>
	);
};
