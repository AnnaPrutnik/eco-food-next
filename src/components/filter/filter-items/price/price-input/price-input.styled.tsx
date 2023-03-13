import styled from 'styled-components';
import { inputBase } from 'styles/fields';

export const Price = styled.input`
	${inputBase};
	padding-left: 25px;
	-moz-appearance: textfield;
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

export const CurrencyLabel = styled.p`
	position: absolute;
	top: 19px;
	transform: translateY(-50%);
	left: 12px;
`;

export const PriceLabel = styled.label`
	opacity: 0.5;
	margin-right: ${({ theme }) => theme.space.sp12};
	text-transform: capitalize;

	${({ theme }) => theme.media.mdMin} {
		margin-right: ${({ theme }) => theme.space.sp8};
	}

	${({ theme }) => theme.media.lgMin} {
		margin-right: ${({ theme }) => theme.space.sp12};
	}
`;
