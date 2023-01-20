import React, { useCallback, useMemo } from 'react';
import { useField } from 'formik';
import { CheckoutSelect, SelectLabel, FilterSelect } from './fields.styled';
import { Box } from '../';
import { IOption } from 'pages';

interface SelectProps {
  type: 'checkout' | 'filter';
  name: string;
  label: string;
  options: IOption[];
}

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  type,
}) => {
  const [field, meta, helpers] = useField(name);

  const onChangeSelect = useCallback(
    (value: unknown) => {
      helpers.setValue((value as IOption).value);
    },
    [helpers]
  );

  const onBlurSelect = useCallback(() => helpers.setTouched(true), [helpers]);

  const value = useMemo(() => {
    const result = options.find((item) => item.value === field.value);
    return result ? result : options[0];
  }, [field.value, options]);

  if (type === 'filter') {
    return (
      <Box display='flex' alignItems='center'>
        <SelectLabel htmlFor={name} mr={5}>
          {label}
        </SelectLabel>
        <Box width='148px'>
          <FilterSelect
            classNamePrefix='custom-select'
            name={name}
            instanceId={name}
            value={value}
            onChange={onChangeSelect}
            onBlur={onBlurSelect}
            options={options}
          />
        </Box>
      </Box>
    );
  }

  return (
    <Box width='100%'>
      <SelectLabel htmlFor={name} mb={3}>
        {label}
      </SelectLabel>
      <CheckoutSelect
        classNamePrefix='custom-select'
        name={name}
        instanceId={name}
        value={value}
        onChange={onChangeSelect}
        onBlur={onBlurSelect}
        options={options}
      />
    </Box>
  );
};
