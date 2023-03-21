import styled from 'styled-components';

export const StarsWrap = styled.div`
	width: 22px;
	height: 21px;
	position: relative;
	overflow: hidden;

	${({ theme }) => theme.media.lgMin} {
		width: 110px;
	}
`;

export const Score = styled.span`
	margin-left: ${p => p.theme.space.sp8};
	font-family: ${p => p.theme.fonts.lato};
	font-weight: ${p => p.theme.fontWeights.bold};
	font-size: ${p => p.theme.fontSizes.f14};
	line-height: ${p => p.theme.lineHeights.body};
	color: ${p => p.theme.colors.primary};
`;
