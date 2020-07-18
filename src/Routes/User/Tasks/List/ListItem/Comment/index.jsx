import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import { addTaskComment } from '../../../../../../Redux/actions/userActions';

import Textarea from '../../../../../../shared/components/Textarea';
import { SubmitButton } from '../../../../../../shared/components/Buttons';

import {
  TaskProgressContainer,
  TaskProgressWrapper,
  ComponentHeader,
  TaskFieldInput,
  FormFieldOne,
  FormFieldTwo,
  Hours,
  TextareaInput,
  SubmitSection,
} from '../../Styles';

const Comment = ({ task, addTaskComment }) => {
  const [formData, setFormData] = useState({
    text: '',
  });

  const handleChange = (name, value) => {
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const { text } = formData;

  const submitForm = (e) => {
    e.preventDefault();
    addTaskComment(task._id, formData);
  };

  return (
    <Fragment>
      <form onSubmit={submitForm}>
        <TextareaInput>
          <Textarea
            name='text'
            placeholder='New Comment'
            value={text}
            onChange={handleChange}
          />
        </TextareaInput>
        <SubmitSection>
          <SubmitButton text={'comment'} />
        </SubmitSection>
      </form>
    </Fragment>
  );
};

export default connect(null, { addTaskComment })(Comment);
