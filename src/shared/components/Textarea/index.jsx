import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { StyledTextarea, TextareaElement } from './Styles';

const propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  rows: PropTypes.number,
};

const defaultProps = {
  className: undefined,
  value: '',
  name: '',
  width: 100,
  height: 50,
  rows: 2,
};

const Textarea = (props, className) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange(event.target.name, event.target.value);
  };
  return (
    <StyledTextarea className={className}>
      <TextareaElement
        type={props.type}
        name={props.name}
        defaultValue={props.defaultValue}
        value={props.value ? props.value : value}
        width={props.width}
        height={props.height}
        placeholder={props.placeholder}
        onChange={(e) => handleChange(e)}
      />
    </StyledTextarea>
  );
};

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
