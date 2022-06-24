import { Form, Formik } from 'formik';
import React, { useState } from 'react';

import { useCreateTodoMutation } from '../../hooks/mutations';
import { createTodoSchema } from '../../validation/schemas';
import { CustomButton } from '../customButton/CustomButton';
import { CustomInput } from '../customInput/CustomInput';
import { Modal } from '../modal/Modal';

export const CreateTodo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => setIsOpen(false);

  const handleOpenModal = () => setIsOpen(true);

  const [createTodo] = useCreateTodoMutation(handleCloseModal);

  const handleCreateTodo = async (values: InitialValuesType) => {
    await createTodo({
      variables: {
        data: {
          title: values.title,
          description: values.description || '',
        },
      },
    });
  };
  return (
    <div className='uk-padding-small'>
      <CustomButton
        text='Create todo'
        className='uk-button uk-button-primary uk-width-1-1 uk-margin-medium-top'
        onClick={handleOpenModal}
      />
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <Formik
          initialValues={{ title: '', description: '' }}
          onSubmit={handleCreateTodo}
          validationSchema={createTodoSchema}
        >
          <Form>
            <div className='uk-section uk-width-large uk-section-default uk-section-large uk-padding-large uk-flex uk-flex-column uk-flex-center'>
              <CustomInput name='title' placeholder='Enter todo name' isFind={false} />
              <CustomInput
                name='description'
                placeholder='Enter todo description'
                isFind={false}
              />
              <CustomButton
                type='submit'
                text='Create'
                className='uk-button uk-button-primary uk-width-1-1 uk-margin-medium-top'
              />
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

type InitialValuesType = {
  title: string;
  description?: string;
};
