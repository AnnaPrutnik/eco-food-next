import { useCallback, useMemo } from 'react';
import { useField } from 'formik';
import { ISelectItem } from 'types';

export const useSelectProps = (name: string, options: ISelectItem[]) => {
	const [field, meta, helpers] = useField(name);

	const onChangeSelect = useCallback(
		(value: string) => {
			helpers.setValue(value);
		},
		[helpers]
	);

	const onBlurSelect = useCallback(() => helpers.setTouched(true), [helpers]);

	const value = useMemo(() => {
		const result = options.find(item => item.value === field.value);
		return result ? result : options[0];
	}, [field.value, options]);

	return { value, onChangeSelect, onBlurSelect };
};
