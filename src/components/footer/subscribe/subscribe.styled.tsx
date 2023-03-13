import styled from 'styled-components';
import { iconBtnBase } from 'styles/buttons';

export const SendButton = styled.button`
	${iconBtnBase};
	right: 0;
	top: 0;
	bottom: 0;
	width: 40px;
	background-color: ${({ theme }) => theme.colors.text};
	border-top-right-radius: ${({ theme }) => theme.radii.r10};
	border-bottom-right-radius: ${({ theme }) => theme.radii.r10};
	color: ${({ theme }) => theme.colors.white};
`;
