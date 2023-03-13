import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';
import { SortFormValues } from './types';

export const SortSubmit = () => {
	const { values, submitForm, status } = useFormikContext<SortFormValues>();

	useEffect(() => {
		submitForm();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [values]);

	return null;
};
