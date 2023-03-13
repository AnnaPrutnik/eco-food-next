import React from 'react';
import { Formik, Form } from 'formik';
import { SearchInput } from './search-input';
import { AutoSubmit } from './auto-submiting';
import { SearchFormValues } from './search.interface';

export const SearchForm = () => {
	const initialValues: SearchFormValues = { filter: '' };
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={values => {
				//ToDo: add searching logic
				console.log(values);
			}}
		>
			<Form>
				<SearchInput />
				<AutoSubmit />
			</Form>
		</Formik>
	);
};
