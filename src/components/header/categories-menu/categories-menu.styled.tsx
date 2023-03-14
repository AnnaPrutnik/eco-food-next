import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styled, { css } from 'styled-components';
import { scaleIn, scaleOut } from 'styles/animation';

const Typography = css`
	font-family: ${p => p.theme.fonts.lato};
	font-size: ${p => p.theme.fontSizes.f16};
	font-weight: ${p => p.theme.fontWeights.semiBold};
	line-height: ${p => p.theme.lineHeights.heading};

	color: ${p => p.theme.colors.text};
`;

export const Root = styled(NavigationMenu.Root)`
	${Typography}
	position: relative;
	display: none;

	${p => p.theme.media.xmMin} {
		display: block;
	}
`;

export const Trigger = styled(NavigationMenu.Trigger)`
	${Typography}
	display: flex;
	align-items: center;
	gap: 16px;
	padding: 7px 0;
	border: none;

	background-color: transparent;

	transition: color 275ms ease;

	:hover {
		color: ${p => p.theme.colors.primary};
	}
`;

export const Viewport = styled(NavigationMenu.Viewport)`
	position: absolute;
	top: 100%;
	padding-top: 22px;

	z-index: 1;

	&[data-state='open'] {
		animation: ${scaleIn} 200ms ease;
	}

	&[data-state='closed'] {
		animation: ${scaleOut} 200ms ease;
	}
`;

export const Content = styled(NavigationMenu.Content)`
	position: relative;

	border: 1px solid ${p => p.theme.colors.lightBorder};
	border-radius: ${p => p.theme.radii.r24};
	box-shadow: 0px 24px 48px rgba(56, 54, 52, 0.08);

	background-color: ${p => p.theme.colors.white};

	::before {
		content: '';
		position: absolute;
		bottom: 98%;
		left: 28%;
		width: 13px;
		height: 13px;

		border: inherit;
		border-right: none;
		border-bottom: none;

		background-color: ${p => p.theme.colors.white};

		transform: rotate(45deg);
	}
`;

export const ContentItem = styled.li`
	width: 250px;
	height: 38px;

	:first-child {
		position: relative;
		border-top-right-radius: ${p => p.theme.radii.r24};
		border-top-left-radius: ${p => p.theme.radii.r24};
		overflow: hidden;
		z-index: 2;
	}

	:last-child {
		border-bottom-right-radius: ${p => p.theme.radii.r24};
		border-bottom-left-radius: ${p => p.theme.radii.r24};
		overflow: hidden;
	}

	:not(:last-child) {
		border-bottom: 1px solid ${p => p.theme.colors.lightBorder};
	}
`;

export const ContentLink = styled(NavigationMenu.Link)`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 0 24px;

	outline: none;

	:hover,
	:focus {
		background-color: ${p => p.theme.colors.primary};
		color: ${p => p.theme.colors.white};
	}
`;
