import styled from 'styled-components';
import Select from 'react-select';
import { selectBase, baseLabel } from 'styles/fields';

export const FilterSelect = styled(Select)`
	${selectBase};

	.custom-select {
		&__control {
			min-height: 40px;
			background-color: transparent;
			border-color: ${({ theme }) => theme.colors.darkBorder};
		}

		&__menu {
			overflow: hidden;
		}

		&__menu-list {
			padding-bottom: 0;
			padding-top: 0;
		}
	}
`;

export const SelectLabel = styled.label`
	${baseLabel}
	font-size: ${({ theme }) => theme.fontSizes.f16};
	line-height: ${({ theme }) => theme.lineHeights.heading};
`;
