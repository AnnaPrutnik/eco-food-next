import styled from 'styled-components';
import { iconBtnBase } from 'styles/buttons';

export const SearchButton = styled.button`
	${iconBtnBase};
	right: 16px;
	top: 50%;
	background-color: transparent;
	transform: translateY(-50%);
	color: ${({ theme }) => theme.colors.text};
	display: flex;
	color: ${({ theme }) => theme.colors.text};
	&:hover {
		color: ${({ theme }) => theme.colors.primary};
	}
`;
