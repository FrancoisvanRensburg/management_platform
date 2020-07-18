import React, { Fragment, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { addTask } from '../../../../../../Redux/actions/projectActions';

import Input from '../../../../../../shared/components/Input';
import { MyTextInput } from '../../../../../../shared/components/Forms';

import { FormWrapper, MyTextInputStyled } from '../Styles';

const TaskForm = ({ projectId }) => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <FormWrapper>
        <Formik
          initialValues={{
            taskname: '',
          }}
          validationSchema={Yup.object({
            taskname: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .min(5, 'Must be 5 characters or more'),
          })}
          onSubmit={(values, { resetForm }) => {
            dispatch(addTask(projectId, values));
            resetForm({});
          }}
        >
          <Form>
            <MyTextInputStyled
              placeholder='Start adding tasks...'
              name='taskname'
            />
          </Form>
        </Formik>
      </FormWrapper>
    </Fragment>
  );
};

export default TaskForm;
