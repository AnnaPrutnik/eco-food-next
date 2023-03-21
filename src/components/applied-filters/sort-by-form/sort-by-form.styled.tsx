import styled from 'styled-components';
import Select from 'react-select';
import { baseLabel } from 'styles/fields';
import { ISelectItem } from 'types';

export const Form = styled.form`
	margin: 0 auto;
	display: flex;
	align-items: center;
	width: 311px;
	justify-content: space-between;

	${({ theme }) => theme.media.mdMin} {
		margin: 0;
		width: auto;
		justify-content: flex-end;
	}
`;

export const SortSelect = styled(Select<ISelectItem>)`
	.sort-select {
		&__indicator-separator {
			display: none;
		}

		&__control {
			min-height: 40px;
			width: 148px;
			border: 1px solid;
			border-color: ${({ theme }) => theme.colors.darkBorder};
			border-radius: ${({ theme }) => theme.radii.r10};
			background-color: transparent;
			box-shadow: none;
			font-size: ${({ theme }) => theme.fontSizes.f14} !important;
			font-weight: ${({ theme }) => theme.fontWeights.semiBold} !important;
			line-height: ${({ theme }) => theme.lineHeights.heading} !important;
			transition: ${({ theme }) => `all ${theme.transition.default}`};

			&:hover {
				border-color: ${({ theme }) => theme.colors.primary} !important;
				& .sort-select__indicator {
					color: ${({ theme }) => theme.colors.primary} !important;
				}
			}
			&--menu-is-open {
				border-color: ${({ theme }) => theme.colors.primary} !important;
				box-shadow: ${({ theme }) =>
					`0px 4px 6px -5px ${theme.colors.primary}`};
				& .sort-select__indicator {
					transform: rotate(180deg);
					color: ${({ theme }) => theme.colors.primary} !important;
				}
			}
		}

		&__value-container {
			padding-top: 2px;
			padding-bottom: 0;
			padding-right: 0;
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
			overflow: hidden;
		}

		&__menu-list {
			padding-bottom: 0;
			padding-top: 0;
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

export const Label = styled.label`
	${baseLabel}
	font-size: ${({ theme }) => theme.fontSizes.f16};
	line-height: ${({ theme }) => theme.lineHeights.heading};
`;
