import styled from 'styled-components';

export const ProductContainer = styled.div`
	margin-top: 38px;
	padding: 24px;
	background-color: ${({ theme }) => theme.colors.white};
	border: 1px solid;
	border-color: ${({ theme }) => theme.colors.primary};
	box-shadow: 0px 20px 48px -18px rgba(56, 54, 52, 0.16);
	border-radius: ${({ theme }) => theme.radii.r24};
`;
