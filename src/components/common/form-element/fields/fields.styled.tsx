import styled from 'styled-components';
import Select from 'react-select';
import { inputBase, selectBase, baseLabel } from 'styles/fields';

export const StyledInput = styled.input`
	${inputBase};
	min-height: 40px;
`;

export const InputLabel = styled.label`
	${baseLabel}
	font-size: ${({ theme }) => theme.fontSizes.f12};
	line-height: ${({ theme }) => theme.lineHeights.input};
`;

export const CheckoutSelect = styled(Select)`
	${selectBase};
	.custom-select__control {
		min-height: 44px;
	}
`;
