import { PropsWithChildren, FC } from 'react';
import { Box } from 'components';

export const Page: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<Box
			width={['375px', '375px', '748px', '1004px', '1180px', '1210px']}
			padding={[
				'16px',
				'24px 20px',
				'40px 20px',
				'48px 24px',
				`64px 20px`,
				`64px 20px`,
			]}
			margin='0 auto'
		>
			{children}
		</Box>
	);
};
