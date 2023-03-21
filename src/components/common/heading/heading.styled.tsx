import styled, { css } from 'styled-components';

const main = css`
	font-family: ${p => p.theme.fonts.gilroy};
	font-weight: ${p => p.theme.fontWeights.heading};
	line-height: ${p => p.theme.lineHeights.heading};
	color: ${p => p.theme.colors.heading};

	text-transform: lowercase;

	::first-letter {
		text-transform: uppercase;
	}
`;

export const Category = styled.h1`
	${main};
	font-size: ${p => p.theme.fontSizes.f24};
	letter-spacing: ${p => p.theme.letterSpacings.heading};

	${({ theme }) => theme.media.lgMin} {
		font-size: ${p => p.theme.fontSizes.f56};
	}
`;

export const Product = styled.h1`
	${main};
	font-size: ${p => p.theme.fontSizes.f24};

	${({ theme }) => theme.media.lgMin} {
		font-size: ${p => p.theme.fontSizes.f40};
	}
`;

export const Section = styled.h2`
	${main}
	font-size: ${p => p.theme.fontSizes.f16};

	${({ theme }) => theme.media.lgMin} {
		font-size: ${p => p.theme.fontSizes.f24};
	}
`;

export const Card = styled.h3`
	${main}
	font-family: ${p => p.theme.fonts.lato};
	font-size: ${p => p.theme.fontSizes.f16};
	font-weight: ${p => p.theme.fontWeights.medium};
`;
