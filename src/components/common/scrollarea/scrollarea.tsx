import { FC, PropsWithChildren, useState, useRef, useEffect } from 'react';
import { Root, Scrollbar, Viewport, Thumb } from './scrollarea.styled';

interface ScrollAreaProps {
	maxHeight?: number;
}
export const ScrollArea: FC<PropsWithChildren<ScrollAreaProps>> = ({
	children,
	maxHeight,
}) => {
	const [height, setHeight] = useState<number | null>(null);
	const root = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (root.current) {
			const clientRect = root.current.getBoundingClientRect();
			if (clientRect.height > maxHeight) {
				setHeight(maxHeight);
			} else {
				setHeight(null);
			}
		}
	}, [maxHeight]);

	return (
		<Root ref={root} height={height} type='always'>
			<Viewport>{children}</Viewport>
			<Scrollbar orientation='vertical' display={!!height ? 'flex' : 'none'}>
				<Thumb />
			</Scrollbar>
		</Root>
	);
};
