import React, { useState } from 'react';

import { InputElement } from '../Styles';

const DepartmentForm = ({ addDepartment }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addDepartment(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputElement
        type='text'
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder='Start typing...'
      />
    </form>
  );
};

export default DepartmentForm;
