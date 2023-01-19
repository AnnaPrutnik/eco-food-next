import Head from 'next/head';
import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Select } from '../components/common';
import { Box } from '../components/common';

const Heading = styled.h1`
  color: #ffa600;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Eco Shop</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Heading>Home</Heading>
        <Formik
          initialValues={{
            name: 'UA',
          }}
          onSubmit={(values, actions) => {
            console.log(values);
          }}
        >
          <Box width='350px' ml='10px'>
            <Form>
              <Select name='name' label='Country / Region'>
                <option value='UK'>United Kingdom(UK)</option>
                <option value='US'>United State of America(US)</option>
                <option value='PL'>Poland(PL)</option>
                <option value='UA'>Ukraine(UA)</option>
              </Select>
              <button type='submit'>Submit</button>
            </Form>
          </Box>
        </Formik>
      </div>
    </>
  );
}
