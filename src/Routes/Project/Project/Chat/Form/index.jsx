import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';

import { addCommentProject } from '../../../../../Redux/actions/projectActions';
import { MyTextarea } from '../../../../../shared/components/Forms';
import { CommentButton } from '../../../../../shared/components/Buttons';
import { SubmitSection } from '../Styles';

const CommentForm = ({ project }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{ text: '' }}
        validateSchema={Yup.object({
          text: Yup.string()
            .min(2, 'Must be at least 2 characters')
            .max(240, 'Cannot exceed 240 characters'),
        })}
        onSubmit={(values, { resetForm }) => {
          dispatch(addCommentProject(project._id, values));
          resetForm({});
        }}
      >
        <Form>
          <div style={{ height: '70px' }}>
            <MyTextarea name='message' placeholder='Say someting' />
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
