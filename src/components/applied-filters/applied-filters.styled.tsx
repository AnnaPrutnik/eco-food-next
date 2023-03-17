import styled from 'styled-components';

export const MobileFilter = styled.button`
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

	${({ theme }) => theme.media.mdMin} {
		display: none;
	}
`;

export const CommonFilter = styled.span`
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	font-size: ${({ theme }) => theme.fontSizes.f16};
	line-height: ${({ theme }) => theme.lineHeights.buttons};
`;

export const FiltersCount = styled.span`
	font-weight: 400;
	font-size: ${({ theme }) => theme.fontSizes.f14};
	line-height: ${({ theme }) => theme.lineHeights.body};
`;

export const FilterActive = styled.ul`
	display: none;

	${({ theme }) => theme.media.mdMin} {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 16px;
	}
`;

export const ClearAllBtn = styled.button`
	border: none;
	outline: none;
	background-color: transparent;
	color: ${({ theme }) => theme.colors.text};
	opacity: 0.8;
	font-size: ${({ theme }) => theme.fontSizes.f14};
	line-height: ${({ theme }) => theme.lineHeights.heading};
	text-decoration-line: underline;
	cursor: pointer;
`;
