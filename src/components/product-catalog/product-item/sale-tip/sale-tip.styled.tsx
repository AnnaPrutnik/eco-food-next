import styled from 'styled-components';

export const SaleBox = styled.div`
	width: 48px;
	height: 24px;
	position: absolute;
	top: 34px;
	left: 30px;

	font-weight: ${({ theme }) => theme.fontWeights.bold};
	font-size: ${({ theme }) => theme.fontSizes.f8};
	line-height: 20px;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.white};

	background-color: ${({ theme }) => theme.colors.secondary};
	text-align: center;
	border-radius: 6px;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: rotate(10deg);
	transition: ${({ theme }) => theme.transition.default};

	${({ theme }) => theme.media.mdMin} {
		top: 36px;
		left: 36px;
		width: 60px;
		height: 28px;
		font-size: ${({ theme }) => theme.fontSizes.f10};
	}

	${({ theme }) => theme.media.xmMin} {
		top: 52px;
		left: 120px;
		width: 69px;
		height: 28px;
		font-size: ${({ theme }) => theme.fontSizes.f12};
	}

	${({ theme }) => theme.media.lgMin} {
		top: 60px;
		left: 170px;
		width: 69px;
		height: 28px;
		font-size: ${({ theme }) => theme.fontSizes.f12};
	}
`;
