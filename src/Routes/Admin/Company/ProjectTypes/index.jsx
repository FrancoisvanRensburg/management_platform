import React, { useState, Fragment } from 'react';

import ProjectForm from './ProjectForm';
import Type from './ProjectItem';

import { ItemsWrapper } from './Styles';

const ProjectTypes = () => {
  const [types, setTypes] = useState([
    { text: 'Implimentation' },
    { text: 'Software' },
    { text: 'Construction' },
  ]);

  const addType = (text) => {
    const newType = [...types, { text }];
    setTypes(newType);
  };
  return (
    <Fragment>
      <ProjectForm addType={addType} />
      <ItemsWrapper>
        {types.map((type, index) => (
          <Type key={index} index={index} type={type} />
        ))}
      </ItemsWrapper>
    </Fragment>
  );
};

export default ProjectTypes;
