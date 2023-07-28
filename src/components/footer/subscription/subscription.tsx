'use client';
import { Formik, Form, Field, FieldInputProps } from 'formik';
import { CheckIcon } from '@/components';
import s from './subscription.module.scss';

interface SubscriptionValues {
  email: string;
}

export const Subscription = () => {
  const initialValues: SubscriptionValues = { email: '' };
  const onSubmitForm = (values: SubscriptionValues) => {
    console.log('submit form with email:', values.email);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmitForm}>
      <Form className={s.form}>
        <label className={s.label} htmlFor="subscription">
          Get our newsletters:
        </label>
        <div className={s.inner}>
          <Field name="email">
            {({ field }: { field: FieldInputProps<string> }) => (
              <input
                className={s.input}
                id="subscription"
                placeholder="Your email"
                type="text"
                autoComplete="off"
                {...field}
              />
            )}
          </Field>
          <button type="submit" className={s.btn} aria-label="send button">
            <CheckIcon />
          </button>
        </div>
      </Form>
    </Formik>
  );
};
