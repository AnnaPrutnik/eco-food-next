import styled from 'styled-components';

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 168px);
	grid-gap: 32px 8px;

	${({ theme }) => theme.media.mdMin} {
		grid-template-columns: repeat(2, 210px);
		grid-gap: 40px 20px;
	}

	${({ theme }) => theme.media.xmMin} {
		grid-template-columns: repeat(3, 210px);
		justify-content: center;
	}

	${({ theme }) => theme.media.lgMin} {
		grid-template-columns: repeat(3, 264px);
		grid-gap: 70px 15px;
	}

	${({ theme }) => theme.media.xlMin} {
		grid-template-columns: repeat(3, 264px);
		grid-gap: 70px 20px;
	}
`;
