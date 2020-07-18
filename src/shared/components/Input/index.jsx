import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { StyledInput, InputElement } from './Styles';

const propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  type: PropTypes.string,
};

const defaultProps = {
  className: undefined,
  value: '',
  type: 'text',
  name: '',
  width: 100,
  validation: '',
};

const Input = (props, width, className, ref) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange(event.target.name, event.target.value);
  };

  return (
    <StyledInput className={className}>
      <InputElement
        type={props.type}
        name={props.name}
        value={props.value ? props.value : value}
        width={props.width}
        placeholder={props.placeholder}
        onChange={(e) => handleChange(e)}
      />
    </StyledInput>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
