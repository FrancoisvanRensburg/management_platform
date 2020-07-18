import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

const Selector = (props) => {
  const [data] = useState(props.data);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange(event.target.name, event.target.value);
  };

  return <div></div>;
};

export default Selector;
