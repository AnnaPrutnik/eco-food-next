import styled from 'styled-components';
import * as ScrollArea from '@radix-ui/react-scroll-area';

export const Root = styled(ScrollArea.Root)`
	width: 100%;
	height: 100vh;
	overflow: hidden;
	--scrollbar-size: 10px;
`;

export const Viewport = styled(ScrollArea.Viewport)`
	width: 100%;
	height: 100%;
`;

export const Scrollbar = styled(ScrollArea.Scrollbar)`
	display: flex;
	user-select: none;
	touch-action: none;
	padding: 2px;
	background-color: ${({ theme }) => theme.colors.lightBackground};
	transition: background-color 160ms ease-out;

	&:hover {
		background-color: ${({ theme }) => theme.colors.darkBackground};
	}
	&[data-orientation='vertical'] {
		width: var(--scrollbar-size);
	}

	&[data-orientation='horizontal'] {
		flex-direction: column;
		height: var(--scrollbar-size);
	}
`;

export const Thumb = styled(ScrollArea.Thumb)`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.text};
	border-radius: 4px;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		min-width: 44px;
		min-height: 44px;
	}
`;

export const Corner = styled(ScrollArea.Corner)`
	.ScrollAreaCorner {
		background: ${({ theme }) => theme.colors.darkBackground};
	}
`;
