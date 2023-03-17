import styled from 'styled-components';
import { inputBase } from 'styles/fields';

export const InputWrapper = styled.div`
	width: 68px;
	height: 40px;
	display: flex;
	align-items: center;
`;

export const Price = styled.input`
	${inputBase};
	padding: 0 12px;
	line-height: 18px;
	font-weight: 600;
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
