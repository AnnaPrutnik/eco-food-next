import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import {
	showContent,
	hideContent,
	hideOverlay,
	showOverlay,
} from 'styles/animation';

import { iconBtnBase } from 'styles/buttons';

export const Root = styled(Dialog.Root)`
	display: block;

	${({ theme }) => theme.media.mdMin} {
		display: none;
	}
`;

export const Trigger = styled(Dialog.Trigger)`
	width: 100%;
	outline: none;
	background-color: ${({ theme }) => theme.colors.darkBackground};
	height: 40px;
	border: none;
	border-radius: ${({ theme }) => theme.radii.r10};
	padding: 0 ${({ theme }) => theme.space.sp16};
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: inherit;
	cursor: pointer;
`;

export const CommonFilter = styled.span`
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	font-size: ${({ theme }) => theme.fontSizes.f16};
	line-height: ${({ theme }) => theme.lineHeights.buttons};
`;

export const Overlay = styled(Dialog.Overlay)`
	background-color: ${({ theme }) => theme.colors.backdrop};
	position: fixed;
	inset: 0;

	&[data-state='open'] {
		animation: ${showOverlay} 300ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	&[data-state='closed'] {
		animation: ${hideOverlay} 300ms cubic-bezier(0.16, 1, 0.3, 1);
	}
`;

export const Content = styled(Dialog.Content)`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 80vh;
	width: 350px;
	overflow: hidden;

	background-color: ${({ theme }) => theme.colors.lightBackground};
	border-radius: ${({ theme }) => theme.radii.r24};

	&[data-state='open'] {
		animation: ${showContent} 300ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	&[data-state='closed'] {
		animation: ${hideContent} 300ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	&:focus {
		outline: none;
	}
`;

export const ExitBtn = styled.button`
	${iconBtnBase};
	border-radius: 50%;
	height: 30px;
	width: 30px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	top: 10px;
	right: 10px;
	background-color: ${({ theme }) => theme.colors.lightBackground};

	&:hover {
		background-color: ${({ theme }) => theme.colors.darkBackground};
	}
`;
