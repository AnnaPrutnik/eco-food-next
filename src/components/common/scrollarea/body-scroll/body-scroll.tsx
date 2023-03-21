import { FC, PropsWithChildren } from 'react';
import { Root, Viewport, Scrollbar, Thumb, Corner } from './body-scroll.styled';

export const BodyScroll: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<Root>
			<Viewport>{children}</Viewport>
			<Scrollbar orientation='horizontal' data-state='visible'>
				<Thumb />
			</Scrollbar>
			<Scrollbar orientation='vertical'>
				<Thumb />
			</Scrollbar>
			<Corner />
		</Root>
	);
};
