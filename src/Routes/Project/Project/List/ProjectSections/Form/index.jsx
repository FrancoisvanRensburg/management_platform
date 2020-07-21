import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { addProjectSection } from '../../../../../../Redux/actions/projectActions';

import { ReactComponent as PlusIcon } from '../../../../../../App/assets/images/plus.svg';
import { MyTextInput } from '../../../../../../shared/components/Forms';
import { SubmitButtonSm } from '../../../../../../shared/components/Buttons';

const SectionForm = ({ project }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <Formik
          initialValues={{ label: '' }}
          validationSchema={Yup.object({
            message: Yup.string()
              .min(2, 'Must be at least 2 characters')
              .max(55, 'Try less characters, the maximum is 55 characters'),
          })}
          onSubmit={(values, { resetForm }) => {
            dispatch(addProjectSection(project._id, values));
            resetForm({});
          }}
        >
          <Form>
            <div>
              <MyTextInput
                name='label'
                placeholder='Name your section...poes'
              />
            </div>
            <div>
              <SubmitButtonSm text={'add'} />
            </div>
          </Form>
        </Formik>
      </div>
      <div
        style={{
          width: '35px',
          height: '30px',
          borderRadius: '2px',
          backgroundColor: 'purple',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PlusIcon />
      </div>
    </div>
  );
};

export default SectionForm;
