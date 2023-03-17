import styled from 'styled-components';

export const FilterItem = styled.li`
	display: flex;
	padding: 0 16px;
	height: 40px;
	align-items: center;
	gap: 8px;
	cursor: default;
`;

export const FilterTitle = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.f14};
	line-height: ${({ theme }) => theme.lineHeights.body};
	opacity: 0.6;
	text-transform: lowercase;

	&::first-letter {
		text-transform: uppercase;
	}
`;
export const FilterValue = styled.span`
	font-weight: ${({ theme }) => theme.fontWeights.semiBold};
	font-size: ${({ theme }) => theme.fontSizes.f14};
	line-height: ${({ theme }) => theme.lineHeights.body};
	text-transform: lowercase;

	&::first-letter {
		text-transform: uppercase;
	}
`;

export const DeleteBtn = styled.button`
	border: none;
	outline: none;
	padding: 0;
	cursor: pointer;
	height: 100%;
	display: flex;
	align-items: center;
	padding-left: 8px;
	color: ${({ theme }) => theme.colors.text};
	background-color: transparent;
`;
