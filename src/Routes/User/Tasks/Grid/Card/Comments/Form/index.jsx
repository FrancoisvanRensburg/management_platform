import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { addTaskCommentProject } from '../../../../../../../Redux/actions/projectActions';

import { MyTextarea } from '../../../../../../../shared/components/Forms';

import { CommentButton } from '../../../../../../../shared/components/Buttons';

const CommentForm = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          message: '',
        }}
        validationSchema={Yup.object({
          text: Yup.string()
            .min(10, 'Comment must be 10 characters or less')
            .max(
              240,
              'Comment must be 240 characters or less. Upload a descriptive document if required'
            ),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch(addTaskCommentProject(task._id, values));
          setSubmitting(false);
          resetForm({});
        }}
      >
        <Form>
          <div style={{ width: '100%', height: '60px', marginBottom: '10px' }}>
            <MyTextarea name='message' placeholder='Comment text' />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CommentButton />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CommentForm;
