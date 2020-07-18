import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { SelectElement, StyledSelect, OptionElement } from './Styles';

const propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
};

const defaultProps = {
  className: undefined,
  value: '',
  name: '',
  width: 100,
};

const CustomSelect = (props) => {
  const [data] = useState(props.data);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange(event.target.name, event.target.value);
  };

  let options = data.map((data) => (
    <option key={data._id} value={data._id}>
      {data.name}
    </option>
  ));
  return (
    <StyledSelect>
      <SelectElement
        name={props.name}
        value={props.value ? props.value : value}
        width={props.width}
        onChange={handleChange}
      >
        <OptionElement>Select Item</OptionElement>
        {options}
      </SelectElement>
    </StyledSelect>
  );
};

CustomSelect.propTypes = propTypes;
CustomSelect.defaultProps = defaultProps;

export default CustomSelect;
