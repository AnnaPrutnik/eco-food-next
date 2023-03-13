import styled from 'styled-components';
import { btnBaseMobile, btnBaseTablet } from 'styles/buttons';

export const Title = styled.h1`
	font-family: ${({ theme }) => theme.fonts.gilroy};
	font-style: normal;
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	font-size: ${({ theme }) => theme.fontSizes.f24};
	line-height: ${({ theme }) => theme.lineHeights.heading};

	${({ theme }) => theme.media.mdMin} {
		font-size: ${({ theme }) => theme.fontSizes.f32};
	}
`;

interface ErrorButtonProps {
	color: 'red' | 'transparent';
}

export const ErrorButton = styled.button<ErrorButtonProps>`
	${btnBaseMobile};
	${btnBaseTablet};
	display: block;
	background-color: ${({ color, theme }) =>
		color === 'red' ? theme.colors.secondary : 'transparent'};
	width: 150px;
	font-size: ${({ theme }) => theme.fontSizes.f14};
	color: ${({ color, theme }) =>
		color === 'red' ? theme.colors.white : theme.colors.secondary};
	border-color: ${({ color, theme }) =>
		color === 'red' ? 'transparent' : theme.colors.secondary};

	&:hover,
	&:focus {
		color: ${({ color, theme }) =>
			color === 'red' ? theme.colors.secondary : theme.colors.white};
		background-color: ${({ color, theme }) =>
			color === 'red' ? 'transparent' : theme.colors.secondary};
		border-color: ${({ color, theme }) =>
			color === 'transparent' ? 'transparent' : theme.colors.secondary};
	}
`;
