import React from 'react';
import { Stars, Box } from 'components';
import { StarsWrap, Score } from './rating.styled';
import { theme } from 'theme/theme';

interface IRating {
	score: number;
}

export const Rating: React.FC<IRating> = ({ score }) => {
	const fill = (score * 100) / 5;

	return (
		<Box display='flex' alignItems='center'>
			<StarsWrap>
				<Box
					width={`${fill}%`}
					height='100%'
					backgroundColor={`${theme.colors.primary}`}
				></Box>
				<Box width='100%' height='100%' position='absolute' top='0' left='0'>
					<Stars />
					<Stars />
					<Stars />
					<Stars />
					<Stars />
				</Box>
			</StarsWrap>
			<Score>{`${score}/5`}</Score>
		</Box>
	);
};
