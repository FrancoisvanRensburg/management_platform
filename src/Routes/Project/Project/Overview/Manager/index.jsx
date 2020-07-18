import React from 'react';

import { ReactComponent as DM } from '../../../../../App/assets/images/chat-icon.svg';

import { ManagerContainer, ComponentHeader, ManagerText } from './Styles';

const ProjectManager = ({ project: { projectmanager } }) => {
  return (
    <ManagerContainer>
      <ComponentHeader>Manager</ComponentHeader>
      <ManagerText>
        <span>
          {projectmanager.firstname}
          <span> </span>
          {projectmanager.lastname}
        </span>
        <DM />
      </ManagerText>
    </ManagerContainer>
  );
};

export default ProjectManager;
