import { css } from 'styled-components';

export const btnBaseMobile = css`
	outline: none;
	border: 1px solid;
	border-color: transparent;
	border-radius: ${({ theme }) => theme.radii.r10};
	background: transparent;
	color: ${({ theme }) => theme.colors.text};
	padding: 0;
	margin: 0;
	display: inline-flex;
	align-items: center;
	gap: 12px;
	font-family: ${({ theme }) => theme.fonts.lato};
	font-size: ${({ theme }) => theme.fontSizes.f16};
	line-height: ${({ theme }) => theme.lineHeights.buttons};
	letter-spacing: ${({ theme }) => theme.letterSpacings.heading};
	font-weight: ${({ theme }) => theme.fontWeights.semiBold};
	transition: ${({ theme }) => theme.transition.default};
	cursor: pointer;

	&:hover,
	&:focus {
		color: ${({ theme }) => theme.colors.primary};
	}

	& svg {
		transition: ${({ theme }) => theme.transition.default};
	}
`;

export const btnBaseTablet = css`
	height: 44px;
	padding: 0 ${({ theme }) => theme.space.sp16};
`;

export const mobileSettingWithIcons = css`
	span {
		display: none;
	}

	svg {
		width: 24px;
		height: 24px;
	}
`;

export const tabletSettingsWithIcons = css`
	span {
		display: inline;
	}
`;
