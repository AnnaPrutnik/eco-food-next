import React, { useCallback, useMemo } from 'react';
import { useField } from 'formik';
import { IOption } from 'types';
import {} from 'hooks';

export const useSelectProps = (name: string, options: IOption[]) => {
  const [field, meta, helpers] = useField(name);

  const onChangeSelect = useCallback(
    (value: IOption) => {
      helpers.setValue(value.value);
    },
    [helpers]
  );

  const onBlurSelect = useCallback(() => helpers.setTouched(true), [helpers]);

  const value = useMemo(() => {
    const result = options.find((item) => item.value === field.value);
    return result ? result : options[0];
  }, [field.value, options]);

  return { value, onChangeSelect, onBlurSelect };
};
