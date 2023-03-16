import { ForwardRefExoticComponent, RefAttributes } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import * as Accordion from '@radix-ui/react-accordion';

import { slideDown, slideUp } from 'styles/animation';

export const Item = styled(Accordion.Item)`
	overflow: hidden;

	transition: all ${({ theme }) => theme.transition.default};

	&[data-state='open'] {
		padding-top: ${({ theme }) => theme.space.sp16};
		padding-bottom: ${({ theme }) => theme.space.sp32};
	}

	&[data-state='closed'] {
		padding-top: 0;
		padding-bottom: 0;
	}

	h3 {
		all: unset;
	}
`;

export const Header = styled(Accordion.Header)`
	display: flex;
`;

export const Trigger = styled(Accordion.Trigger)`
	all: unset;
	width: 100%;
	padding: ${({ theme }) => theme.space.sp16} 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	font-family: inherit;
	background-color: transparent;

	text-transform: capitalize;

	&[data-state='open'] > div {
		transform: rotate(90deg);
	}

	&[data-state='closed'] > div {
		transform: rotate(-90deg);
	}
`;
interface TitleProps {
	fontSize: number;
}

export const Title = styled.span<TitleProps>`
	font-weight: ${({ theme }) => theme.fontWeights.medium};
	font-size: ${({ fontSize }) => fontSize}px;
	line-height: ${({ theme }) => theme.lineHeights.heading};
`;
export const Content = styled(Accordion.Content)`
	overflow: hidden;

	&[data-state='open'] {
		animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
	}

	&[data-state='closed'] {
		animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
	}
`;

export const ArrowContainer = styled.div`
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: ${({ theme }) => theme.transition.default};
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.space.sp16};
`;
