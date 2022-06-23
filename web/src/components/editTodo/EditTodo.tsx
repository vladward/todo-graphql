import { Form, Formik } from 'formik';
import React, { FC, useState } from 'react';

import { useEditTodoMutation } from '../../hooks/mutations';
import { editTodoSchema } from '../../validation/schemas';
import { CardType } from '../card/Card';
import { CustomButton } from '../customButton/CustomButton';
import { CustomInput } from '../customInput/CustomInput';
import { EditIcon } from '../icons';
import { Modal } from '../modal/Modal';

export const EditTodo: FC<CardType> = ({ id, title, completed, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => setIsOpen(false);

  const handleOpenModal = () => setIsOpen(true);

  const [editTodo] = useEditTodoMutation(handleCloseModal);

  const handleEditTodo = async (values: InitialValuesType) => {
    if (id) {
      await editTodo({
        variables: {
          data: {
            id: id,
            title: values.title,
            description: values.description || '',
            completed: values.completed || false,
          },
        },
      });
    }
  };
  return (
    <div className='uk-padding-small'>
      <EditIcon onClick={handleOpenModal} />
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <Formik
          initialValues={{ title, description, completed }}
          onSubmit={handleEditTodo}
          validationSchema={editTodoSchema}
        >
          <Form>
            <div className='uk-section uk-width-large uk-section-default uk-section-large uk-padding-large uk-flex uk-flex-column uk-flex-center'>
              <CustomInput name='title' placeholder='Enter todo name' />
              <CustomInput name='description' placeholder='Enter todo description' />
              <CustomInput
                name='completed'
                type='checkbox'
                label='Status'
                id='completed'
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
  title?: string;
  description?: string;
  completed?: boolean;
};
