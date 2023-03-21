import { css } from 'styled-components';
import { space, SpaceProps } from 'styled-system';

interface InputProps {
	bg: 'transparent' | 'light';
	border: 'none' | 'light' | 'dark';
	icon?: boolean | undefined;
}

export const inputBase = css<InputProps>`
	width: 100%;
	height: 100%;
	font-family: inherit;
	font-size: ${({ theme }) => theme.fontSizes.f14};
	line-height: ${({ theme }) => theme.lineHeights.input};
	padding-right: ${({ theme, icon }) =>
		icon ? theme.space.sp36 : theme.space.sp16};
	padding-left: ${({ theme }) => theme.space.sp16};
	border-radius: ${({ theme }) => theme.radii.r10};
	color: ${({ theme }) => theme.colors.text};
	background-color: ${({ bg, theme }) =>
		bg === 'light' ? theme.colors.white : 'transparent'};
	outline: none;
	border: 1px solid;
	border-color: ${({ border, theme }) => {
		switch (border) {
			case 'dark':
				return `${theme.colors.darkBorder}`;
			case 'light':
				return `${theme.colors.lightBorder}`;
			default:
				return 'transparent';
		}
	}};
	transition: ${({ theme }) => `all ${theme.transition.default}`};

	&::placeholder {
		opacity: 0.5;
	}

	&:focus,
	&:hover {
		border-color: ${({ theme }) => theme.colors.primary};
	}

	&: focus {
		box-shadow: ${({ theme }) => `0px 4px 6px -5px ${theme.colors.primary}`};
	}
`;

export const baseLabel = css<SpaceProps>`
	${space}
	display: block;
	opacity: 0.8;
	text-transform: lowercase;

	&::first-letter {
		text-transform: uppercase;
	}
`;
