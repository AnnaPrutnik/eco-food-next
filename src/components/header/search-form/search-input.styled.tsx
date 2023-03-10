import styled from 'styled-components';
import { inputBase } from 'styles/fields';

export const Search = styled.input`
	${inputBase};
	font-size: ${({ theme }) => theme.fontSizes.f16};
	border: none;
`;
