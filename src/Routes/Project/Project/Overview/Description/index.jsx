import React from 'react';

import {
  DescriptionContainer,
  ComponentHeader,
  DescriptionText,
} from './Styles';

const ProjectDescription = ({ project: { description } }) => {
  return (
    <DescriptionContainer
      style={{
        flexGrow: 1,
      }}
    >
      <ComponentHeader>Description</ComponentHeader>
      <div>
        <span>{description}</span>
      </div>
    </DescriptionContainer>
  );
};

export default ProjectDescription;
