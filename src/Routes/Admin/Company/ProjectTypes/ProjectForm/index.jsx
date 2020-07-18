import React, { useState } from 'react';

import { InputElement } from '../Styles';

const ProjectForm = ({ addType }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addType(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputElement
        type='text'
        placeholder='Start typing...'
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </form>
  );
};

export default ProjectForm;
