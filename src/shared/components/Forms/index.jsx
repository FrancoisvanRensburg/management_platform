import React from 'react';
import { useField } from 'formik';
import Select from 'react-select';
import styled from 'styled-components';

import { color, font, zIndexValues } from '../../utils/Styles';

const StyledErrorMessage = styled.div`
  color: ${color.buttonPink};
  ${font.size(12)}
  z-index: ${zIndexValues.modal};
  position: absolute;
  padding: 3px 0 0 5px;
`;

const StyledLabel = styled.label`
  margin: 0 7px 0 0;
  ${font.size(15)}
`;

const StyledInput = styled.input`
  height: 32px;
  width: 100%;
  /* padding: 0 0 0 7px; */
  text-indent: 7px;
  border-radius: 3px;
  border: none;
  box-sizing: border-box;
  transition: background 0.1s;
  ${font.regular}
  ${font.size(15)}
`;

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {label && (
        <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      )}
      <StyledInput className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage className='error'>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

export const MyCheckbox = ({ children, ...props }) => {
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
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

const StyledTextarea = styled.textarea`
  height: 100%;
  width: 100%;
  padding: 7px;
  resize: none;
  border-radius: 3px;
  border: none;
  box-sizing: border-box;
  transition: background 0.1s;
  ${font.regular}
  ${font.size(15)}
`;

export const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props });
  return (
    <>
      {label && (
        <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      )}
      <StyledTextarea className='textarea' {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage className='error'>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

const StyledSelect = styled.select`
  height: 32px;
  width: 100%;
  /* padding: 0 0 0 7px; */
  text-indent: 7px;
  border-radius: 3px;
  border: none;
  color: ${color.textDark};
  transition: background 0.1s;
  ${font.regular}
  ${font.size(15)}
`;

export const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

export const MyCustonSelect = ({ ...props }) => {
  return <Select options={props.options} formatGroupLabel={formatGroupLabel} />;
};
