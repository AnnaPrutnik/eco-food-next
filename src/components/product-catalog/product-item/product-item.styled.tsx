import styled from 'styled-components';
import Link from 'next/link';

export const ListItem = styled.li`
	position: relative;
	width: 100%;
	height: 100%;
`;

export const CardLink = styled(Link)`
	box-shadow: 0px 6px 16px -10px rgba(56, 54, 52, 0.08);
	padding: ${({ theme }) => theme.space.sp16};
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	border: 1px solid;
	border-color: transparent;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.radii.r24};
	transition: ${({ theme }) => theme.transition.default};

	&:hover {
		box-shadow: 0px 20px 48px -18px rgba(56, 54, 52, 0.16);
		border-color: ${({ theme }) => theme.colors.primary};

		& .image-box {
			transform: scale(1.1);
		}

		& .sale-box {
			transform: translateY(10px) rotate(10deg);
		}
	}

	${({ theme }) => theme.media.mdMin} {
		padding: ${({ theme }) => theme.space.sp24};
	}

	${({ theme }) => theme.media.xmMin} {
		&:hover {
			& .sale-box {
				transform: scale(1.1) rotate(10deg);
			}
		}
	}
`;

export const RatingBox = styled.div`
	text-align: right;
	margin-bottom: 16px;

	${({ theme }) => theme.media.mdMin} {
		margin-bottom: 28px;
	}

	${({ theme }) => theme.media.xmMin} {
		margin-bottom: 48px;
	}

	${({ theme }) => theme.media.lgMin} {
		margin-bottom: 52px;
	}
`;

export const ImageBox = styled.div`
	width: 72px;
	height: 72px;
	border-radius: 50%;
	overflow: hidden;
	position: absolute;
	top: -16px;
	left: 16px;
	box-shadow: 5px 5px 5px rgba(56, 54, 52, 0.16);
	transition: ${({ theme }) => theme.transition.default};
	background-color: ${({ theme }) => theme.colors.darkBackground};

	${({ theme }) => theme.media.mdMin} {
		width: 84px;
		height: 84px;
		top: -24px;
		left: 24px;
	}

	${({ theme }) => theme.media.xmMin} {
		width: 96px;
		height: 96px;
		top: -30px;
		left: 20px;
	}

	${({ theme }) => theme.media.lgMin} {
		width: 116px;
		height: 116px;
		top: -38px;
		left: 24px;
	}
`;

export const Rating = styled.div`
	color: ${({ theme }) => theme.colors.primary};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	font-size: ${({ theme }) => theme.fontSizes.f12};
	line-height: 20px;
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	margin-top: ${({ theme }) => theme.space.sp8};
	margin-right: ${({ theme }) => theme.space.sp8};

	${({ theme }) => theme.media.mdMin} {
		flex-direction: row;
		gap: ${({ theme }) => theme.space.sp8};
		align-items: center;
		justify-content: flex-end;
		font-size: ${({ theme }) => theme.fontSizes.f14};
		margin-top: 0;
		margin-right: 0;
	}
`;

export const SaleBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: ${({ theme }) => theme.space.sp4};
	align-items: baseline;

	${({ theme }) => theme.media.xmMin} {
		flex-direction: column-reverse;
		gap: 0;
	}
`;
interface PriceProps {
	isSale: boolean;
}

export const Price = styled.p<PriceProps>`
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	font-size: ${({ theme }) => theme.fontSizes.f14};
	line-height: ${({ theme }) => theme.lineHeights.body};
	color: ${({ isSale, theme }) =>
		isSale ? theme.colors.secondary : theme.colors.text};
`;

export const OldPrice = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.f12};
	line-height: ${({ theme }) => theme.lineHeights.body};
	text-decoration-line: line-through;
	font-weight: ${({ theme }) => theme.fontWeights.body};
	color: ${({ theme }) => theme.colors.text};
`;

export const Measure = styled.p`
	font-weight: ${({ theme }) => theme.fontWeights.medium};
	font-size: ${({ theme }) => theme.fontSizes.f12};
	line-height: ${({ theme }) => theme.lineHeights.body};
	color: ${({ theme }) => theme.colors.text};
	opacity: 0.5;
`;
