import { useState, useEffect } from 'react';
import { useQueryParams } from 'hooks';

export const useQueryParamsState = (property: string) => {
	const {
		getArrayValueFromQuery,
		setArrayAsPropertyToQuery,
		deletePropertyFromQuery,
		updateQueryParams,
	} = useQueryParams();

	const [values, setValues] = useState<string[]>(() => {
		const result = getArrayValueFromQuery(property);
		return result ? result : [];
	});

	useEffect(() => {
		if (values.length > 0) {
			setArrayAsPropertyToQuery(property, values);
		} else {
			deletePropertyFromQuery(property);
		}
		updateQueryParams();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [values]);

	const changeValues = (value: string) => {
		console.log(value);
		let newValues: string[];
		if (values.includes(value)) {
			newValues = values.filter(item => item !== value);
		} else {
			newValues = [...values, value];
		}
		setValues(newValues);
	};

	return { values, changeValues };
};
