import { PropsWithChildren, FC } from 'react';
import { Box } from 'components';

export const Page: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<Box
			width={['100%', '375px', '768px', '1024px', '1200px', '1210px']}
			padding={['sp16', 'sp24', 'sp40', '48px 24px', `64px 48px`, `64px 20px`]}
			margin='0 auto'
		>
			{children}
		</Box>
	);
};
