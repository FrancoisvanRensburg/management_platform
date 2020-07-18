import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

import { color, font, zIndexValues } from '../../utils/Styles';

const DatePickerStyled = styled(DatePicker)`
  width: 100%;
  height: 36px;
  border: none;
  border-radius: 3px;
  text-indent: 7px;

  & input {
    width: 100%;
  }
`;

const StyledErrorMessage = styled.div`
  color: ${color.buttonPink};
  ${font.size(12)}
  z-index: ${zIndexValues.modal};
`;

// Styles for date picker is done in react-datepicker node-modules

export const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  return (
    <>
      <DatePickerStyled
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
        dateFormat='MMMM d, yyyy'
      />
      {meta.touched && meta.error ? (
        <StyledErrorMessage className='error'>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};
