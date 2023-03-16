import styled from 'styled-components';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as RadixLabel from '@radix-ui/react-label';

export const Root = styled(Checkbox.Root)`
	width: 20px;
	height: 20px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px 4px;
	border: 1px solid ${({ theme }) => theme.colors.lightBackground};
	box-shadow: 0px 4px 6px -5px rgba(56, 54, 52, 0.1);
	transition: all ${({ theme }) => theme.transition.default};

	&[data-state='unchecked'] {
		background-color: ${({ theme }) => theme.colors.white};
	}

	&[data-state='checked'] {
		background-color: ${({ theme }) => theme.colors.primary};
	}
`;

export const Indicator = styled(Checkbox.Indicator)`
	color: ${({ theme }) => theme.colors.white};
`;

export const Label = styled(RadixLabel.Root)`
	font-size: ${({ theme }) => theme.fontSizes.f14};
	line-height: ${({ theme }) => theme.lineHeights.heading};
	text-transform: capitalize;
	cursor: pointer;
`;
