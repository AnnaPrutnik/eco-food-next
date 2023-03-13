import { css } from 'styled-components';
import { space, SpaceProps } from 'styled-system';

interface InputProps {
	bg: 'transparent' | 'light';
	border: 'none' | 'light' | 'dark';
	icon?: boolean | undefined;
}

export const inputBase = css<InputProps>`
	position: relative;
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
	border: ${({ border, theme }) => {
		switch (border) {
			case 'dark':
				return `1px solid ${theme.colors.darkBorder}`;
			case 'light':
				return `1px solid ${theme.colors.lightBorder}`;
			default:
				return '1px solid transparent';
		}
	}};
	transition: ${({ theme }) => `all ${theme.transition.default}`};

	&::placeholder {
		opacity: 0.5;
	}

	&:focus,
	&:hover {
		border-color: ${({ theme }) => theme.colors.primary};

		& ~ button {
			color: ${({ theme }) => theme.colors.primary};
		}
	}

	&: focus {
		box-shadow: ${({ theme }) => `0px 4px 6px -5px ${theme.colors.primary}`};
	}
`;

export const selectBase = css`
	.custom-select {
		&__indicator-separator {
			display: none;
		}
		&__control {
			border: 1px solid;
			border-color: ${({ theme }) => theme.colors.lightBorder};
			border-radius: ${({ theme }) => theme.radii.r10};
			box-shadow: none;
			font-size: ${({ theme }) => theme.fontSizes.f14} !important;
			line-height: ${({ theme }) => theme.lineHeights.heading} !important;
			transition: ${({ theme }) => `all ${theme.transition.default}`};
			&:hover {
				border-color: ${({ theme }) => theme.colors.primary} !important;
				& .custom-select__indicator {
					color: ${({ theme }) => theme.colors.primary} !important;
				}
			}
			&--menu-is-open {
				border-color: ${({ theme }) => theme.colors.primary} !important;
				box-shadow: ${({ theme }) =>
					`0px 4px 6px -5px ${theme.colors.primary}`};
				& .custom-select__indicator {
					transform: rotate(180deg);
					color: ${({ theme }) => theme.colors.primary} !important;
				}
			}
		}
		&__input-container {
			color: ${({ theme }) => theme.colors.text} !important;
		}
		&__indicator {
			cursor: pointer;
			color: ${({ theme }) => theme.colors.text} !important;
		}
		&__menu {
			border-radius: ${({ theme }) => theme.radii.r10};
		}
		&__option {
			cursor: pointer;
			font-size: ${({ theme }) => theme.fontSizes.f14} !important;
			line-height: ${({ theme }) => theme.lineHeights.heading} !important;
			&:hover {
				background-color: ${({ theme }) => theme.colors.darkBackground};
			}
			&--is-selected,
			&--is-selected:hover {
				background-color: ${({ theme }) => theme.colors.primary};
			}
		}
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
