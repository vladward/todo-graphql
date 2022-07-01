import { Form, Formik } from 'formik';
import React from 'react';

import { CustomInput } from '../customInput/CustomInput';

export const FindTodo = () => {
  return (
    <div className='uk-padding-small uk-margin-small'>
      <Formik initialValues={{ title: '' }} onSubmit={() => {}}>
        <Form>
          <CustomInput name='title' placeholder='Search todos' isFind />
        </Form>
      </Formik>
    </div>
  );
};
