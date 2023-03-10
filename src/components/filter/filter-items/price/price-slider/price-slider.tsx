import { FC, useMemo } from 'react';
import {
	Text,
	SliderBase,
	SliderProgress,
	SliderThumb,
} from './price-slider.styled';
import { Box } from 'components';

interface SliderProps {
	minPrice: number;
	maxPrice: number;
	onChangePrice: (value: number, type: string) => void;
	onSetPrice: () => void;
	min: number;
	max: number;
}

export const Slider: FC<SliderProps> = ({
	minPrice,
	maxPrice,
	onChangePrice,
	onSetPrice,
	min,
	max,
}) => {
	const leftPosition = useMemo(() => {
		return Math.ceil((minPrice / (max - min)) * 100 + 0.1);
	}, [max, min, minPrice]);

	const rightPosition = useMemo(() => {
		return Math.ceil(100 - (maxPrice / (max - min)) * 100 - 0.1);
	}, [max, maxPrice, min]);

	const onChangePriceValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		const type = e.target.name;
		onChangePrice(value, type);
	};

	return (
		<Box width='100%'>
			<Box display='flex' justifyContent='space-between' mb='sp4'>
				<Text>{min}</Text>
				<Text>{max}</Text>
			</Box>
			<Box
				height='20px'
				display='flex'
				flexDirection='column'
				justifyContent='center'
				padding='0 2px'
			>
				<SliderBase>
					<SliderProgress left={leftPosition} right={rightPosition} />
				</SliderBase>
				<Box position='relative'>
					<SliderThumb
						name='minPrice'
						type='range'
						min={min}
						max={max}
						value={minPrice}
						onChange={onChangePriceValue}
						onMouseUp={onSetPrice}
					/>
					<SliderThumb
						name='maxPrice'
						type='range'
						min={min}
						max={max}
						value={maxPrice}
						onChange={onChangePriceValue}
						onMouseUp={onSetPrice}
					/>
				</Box>
			</Box>
		</Box>
	);
};
