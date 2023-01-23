import React, { useMemo } from 'react';
import { Text, SliderBase, SliderProgress, SliderThumb } from './slider.styled';
import { Box } from 'components';
import { useField } from 'formik';

interface SliderProps {
  start: string;
  end: string;
  max: number;
}

export const Slider: React.FC<SliderProps> = ({ start, end, max }) => {
  const [startField] = useField(start);
  const [endField] = useField(end);

  const leftPosition = useMemo(() => {
    return Math.ceil((startField.value / max) * 100 + 0.1);
  }, [startField, max]);

  const rightPosition = useMemo(() => {
    return Math.ceil(100 - (endField.value / max) * 100 - 0.1);
  }, [endField, max]);

  return (
    <Box width='100%'>
      <Box display='flex' justifyContent='space-between' mb={1}>
        <Text>0</Text>
        <Text>{max}</Text>
      </Box>
      <Box
        height='20px'
        display='flex'
        flexDirection='column'
        justifyContent='center'
      >
        <SliderBase>
          <SliderProgress left={leftPosition} right={rightPosition} />
        </SliderBase>
        <Box position='relative'>
          <SliderThumb
            name={start}
            type='range'
            min={0}
            max={max}
            value={startField.value}
            onChange={startField.onChange}
          />
          <SliderThumb
            name={end}
            type='range'
            min={0}
            max={max}
            value={endField.value}
            onChange={endField.onChange}
          />
        </Box>
      </Box>
    </Box>
  );
};
