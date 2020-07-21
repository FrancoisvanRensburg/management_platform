import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { addTask } from '../../../../../../Redux/actions/projectActions';

import { MyTextInput } from '../../../../../../shared/components/Forms';

const TaskForm = ({ projectId }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{ taskname: '' }}
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
          <MyTextInput placeholder='Start adding tasks...' name='taskname' />
        </Form>
      </Formik>
    </div>
  );
};

export default TaskForm;
