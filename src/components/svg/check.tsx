import { FC } from 'react';
interface CheckIconProps {
	width?: number;
	height?: number;
}

export const CheckIcon: FC<CheckIconProps> = ({ width = 16, height = 13 }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 16 13'
			fill='none'
			stroke='currentColor'
		>
			<path
				d='M1.33301 5.85L6.66634 11.05L14.6663 1.95'
				strokeWidth='1.5'
				strokeLinecap='round'
			/>
		</svg>
	);
};
