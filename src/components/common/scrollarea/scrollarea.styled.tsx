import styled from 'styled-components';
import * as ScrollArea from '@radix-ui/react-scroll-area';

interface Props {
	height: number | null;
}

export const Root = styled(ScrollArea.Root)<Props>`
	height: ${({ height }) => (height ? `${height}px` : '100%')};
	width: 100%
	overflow: hidden;
	--scrollbar-size: 10px;
`;

export const Viewport = styled(ScrollArea.Viewport)`
	width: 100%;
	height: 100%;
`;

interface ScrollBarProp {
	display: 'flex' | 'none';
}

export const Scrollbar = styled(ScrollArea.Scrollbar)<ScrollBarProp>`
	display: ${({ display }) => display};
	/* ensures no selection */
	user-select: none;
	/* disable browser handling of all panning and zooming gestures on touch devices */
	touch-action: none;
	padding: 2px;
	background: ${({ theme }) => theme.colors.darkBackground};
	transition: background 160ms ease-out;

	&:hover {
		background: ${({ theme }) => theme.colors.darkBackground};
	}
	&[data-orientation='vertical'] {
		width: 4px;
	}
`;

export const Thumb = styled(ScrollArea.Thumb)`
	flex: 1;
	position: relative;

	&::before {
		content: '';
		width: 4px;
		height: 100%;
		min-height: 44px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: ${({ theme }) => theme.colors.text};
		border-radius: 1.5px;
	}
`;
