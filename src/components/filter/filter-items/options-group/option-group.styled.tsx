import styled from 'styled-components';

export const OptionList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.space.sp8};
`;
