import styled from 'styled-components';
import { inputBase, baseLabel } from 'styles/fields';

export const StyledInput = styled.input`
	${inputBase};
	min-height: 40px;
`;

export const InputLabel = styled.label`
	${baseLabel}
	font-size: ${({ theme }) => theme.fontSizes.f12};
	line-height: ${({ theme }) => theme.lineHeights.input};
`;
