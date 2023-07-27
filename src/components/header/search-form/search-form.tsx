'use client';
import { Formik, Form, Field, FieldInputProps } from 'formik';
import { AutoSubmit } from './auto-submiting';
import { SearchFormValues } from './search.interface';
import { SearchIcon } from '@/components';
import s from './search-form.module.scss';

export function SearchForm() {
  const initialValues: SearchFormValues = { filter: '' };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        //ToDo: add searching logic
        console.log(values);
      }}
    >
      <Form>
        <Field name="filter">
          {({ field }: { field: FieldInputProps<string> }) => (
            <label className={s.label}>
              <input
                className={s.input}
                placeholder="Search"
                type="text"
                autoComplete="off"
                {...field}
              />
              <div className={s.icon}>
                <SearchIcon />
              </div>
            </label>
          )}
        </Field>
        <AutoSubmit />
      </Form>
    </Formik>
  );
}
