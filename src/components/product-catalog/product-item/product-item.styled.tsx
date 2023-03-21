import styled from 'styled-components';

export const ListItem = styled.li`
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: 0px 6px 16px -10px rgba(56, 54, 52, 0.08);
	border-radius: ${({ theme }) => theme.radii.r16};
	padding: ${({ theme }) => theme.space.sp16};
`;

export const Rating = styled.div``;
