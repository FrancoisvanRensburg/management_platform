import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { addTaskCommentProject } from '../../../../../../../Redux/actions/projectActions';

import { MyTextarea } from '../../../../../../../shared/components/Forms';

import { CommentButton } from '../../../../../../../shared/components/Buttons';

import { SubmitSection } from '../Styles';

const CommentForm = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div style={{ width: '90%' }}>
      <Formik
        initialValues={{
          text: '',
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
          <div style={{ width: '95%', height: '120px', marginBottom: '28px' }}>
            <MyTextarea name='text' placeholder='Comment text' />
          </div>
          <SubmitSection>
            <CommentButton />
          </SubmitSection>
        </Form>
      </Formik>
    </div>
  );
};

export default CommentForm;
