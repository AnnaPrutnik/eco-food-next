import styled from 'styled-components';

type cardProps = {
	bgImg: string;
};

export const CardList = styled.ul`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 15px;
	padding: 15px;

  ${p => p.theme.media.mdMin} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${p => p.theme.media.xmMin} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.li<cardProps>`
	position: relative;
	width: 100%;
	height: 350px;
	border-radius: ${p => p.theme.radii.r24};
	background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(56, 54, 52, 0.3)),
		url(${p => p.bgImg});
	background-position: center;
	background-size: 180%;

	transition: background-size 3000ms ease;

	:hover {
		background-size: 210%;
	}

  ${p => p.theme.media.lgMin} {
    height: 400px;
  }
`;

export const Button = styled.a`
	position: absolute;
	bottom: 20px;
	left: 20px;

	padding: 18px 25px;

	border: 1px solid ${p => p.theme.colors.white};
	border-radius: ${p => p.theme.radii.r10};

	font-family: ${p => p.theme.fonts.lato};
	font-size: ${p => p.theme.fontSizes.f14};
	line-height: ${p => p.theme.lineHeights.buttons};

	color: ${p => p.theme.colors.text};
	background-color: ${p => p.theme.colors.white};

	transition: all 300ms ease;

	:hover,
	:focus {
		background-color: transparent;
		border-color: ${p => p.theme.colors.white};
		color: ${p => p.theme.colors.white};
	}

	text-transform: uppercase;
`;

export const Title = styled.h3`
	position: absolute;
	left: 20px;
	bottom: 100px;
	text-transform: uppercase;
	color: white;
`;
