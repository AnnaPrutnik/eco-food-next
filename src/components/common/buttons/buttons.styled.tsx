import styled from 'styled-components';

export const SearchButton = styled.button`
	right: 16px;
	top: 50%;
	transform: translateY(-50%);

	background-color: transparent;
	color: ${({ theme }) => theme.colors.text};

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
	}
`;
