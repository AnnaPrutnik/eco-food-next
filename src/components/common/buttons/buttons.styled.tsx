import styled from 'styled-components';

export const SearchButton = styled.button`
	position: absolute;
	right: 16px;
	top: 50%;
	transform: translateY(-50%);

	padding: 0;
	margin: 0;
	border: none;
	outline: none;

	cursor: pointer;

	background-color: transparent;

	color: ${({ theme }) => theme.colors.text};

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
	}
`;
