import { Form, Formik } from 'formik';
import React from 'react';

import { CustomInput } from '../customInput/CustomInput';

export const FindTodo = () => {
  return (
    <div className='uk-padding-small'>
      <h2>Find todos</h2>
      <Formik initialValues={{ title: '' }} onSubmit={() => {}}>
        <Form>
          <CustomInput name='title' placeholder='Enter todo name' />
        </Form>
      </Formik>
    </div>
  );
};
