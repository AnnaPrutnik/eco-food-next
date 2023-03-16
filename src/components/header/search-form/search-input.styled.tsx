import styled from 'styled-components';
import { inputBase } from 'styles/fields';

export const Search = styled.input`
	${inputBase};
	font-size: ${({ theme }) => theme.fontSizes.f16};
	border: none;

	&:hover {
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	}
`;

export const IconWrapper = styled.div`
	position: absolute;
	top: 50%;
	right: 16px;
	width: 18px;
	height: 18px;
	transform: translateY(-50%);
`;
