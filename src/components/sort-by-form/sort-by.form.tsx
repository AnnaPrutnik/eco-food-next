import React from 'react';
import { SortFormValues } from './types';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import { useQueryParams } from 'hooks';
import { SortBySelect } from 'components';
import { SortSubmit } from './sort-by-submiting';
import { IOption } from 'types';
import styled from 'styled-components';

interface SortByFormProps {
  options: IOption[];
}

const StyledForm = styled(Form)`
  margin: 0 auto;

  ${({ theme }) => theme.media.mdMin} {
    margin: 0;
  }
`;

export const SortByForm: React.FC<SortByFormProps> = ({ options }) => {
  const initialValues: SortFormValues = { sortBy: options[0].value };
  const { updateQueryParams } = useQueryParams();
  const router = useRouter();
  const { query } = router;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        query.sortBy = values.sortBy;
        updateQueryParams();
      }}
    >
      <StyledForm>
        <SortBySelect label="sort by" name="sortBy" options={options} />
        <SortSubmit />
      </StyledForm>
    </Formik>
  );
};
