import { css } from 'styled-components';

export const btnBaseMobile = css`
	outline: none;
	border: 1px solid;
	border-color: transparent;
	border-radius: ${({ theme }) => theme.radii.r10};
	background: transparent;
	padding: 0;
	margin: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;

	font-family: ${({ theme }) => theme.fonts.lato};
	font-size: ${({ theme }) => theme.fontSizes.f16};
	line-height: ${({ theme }) => theme.lineHeights.buttons};
	letter-spacing: ${({ theme }) => theme.letterSpacings.heading};
	font-weight: ${({ theme }) => theme.fontWeights.semiBold};
	cursor: pointer;
	transition: ${({ theme }) => theme.transition.default};

	&:hover,
	&:active {
		color: ${({ theme }) => theme.colors.primary};
	}
`;

export const btnBaseTablet = css`
	height: 44px;
	padding: 0 ${({ theme }) => theme.space.sp16};
	gap: 12px;
`;

export const mobileSettingWithIcons = css`
	span {
		display: none;
	}
`;

export const tabletSettingsWithIcons = css`
	span {
		display: inline;
	}
`;

export const iconBtnBase = css`
	position: absolute;
	padding: 0;
	margin: 0;
	border: none;
	outline: none;
	cursor: pointer;
`;
