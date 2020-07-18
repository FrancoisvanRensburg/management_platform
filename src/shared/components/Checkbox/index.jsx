import React from 'react';
import { useField } from 'formik';

import { CheckboxError } from './Styles';

const CustomCheckbox = ({ children, ...props }) => {
  // We need to tell useField what type of input this is
  // since React treats radios and checkboxes differently
  // than inputs/select/textarea.
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label className='checkbox'>
        <input type='checkbox' {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <CheckboxError className='error'>{meta.error}</CheckboxError>
      ) : null}
    </>
  );
};

export default CustomCheckbox;
