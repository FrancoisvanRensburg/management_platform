import React from 'react';
import { useSelector } from 'react-redux';

import { ProjectTabs, NavLinks } from './Styles';

const ProjectsActions = ({ projectId }) => {
  const project = useSelector((store) => store.project.project);
  const user = useSelector((store) => store.auth.user);

  return (
    <ProjectTabs>
      <div>
        {/* {user._id === project.projectmanager._id && ( */}
        <NavLinks
          to={`/project/${projectId}/setup`}
          activeStyle={{ color: '#feb800', backgroundColor: '#1b1b1b' }}
        >
          Setup
        </NavLinks>
        {/* // )} */}
        <NavLinks
          to={`/project/${projectId}/overview`}
          activeStyle={{ color: '#feb800', backgroundColor: '#1b1b1b' }}
        >
          Overview
        </NavLinks>
        {/* {user._id === project.projectmanager._id && ( */}
        <NavLinks
          to={`/project/${projectId}/detail`}
          activeStyle={{ color: '#feb800', backgroundColor: '#1b1b1b' }}
        >
          Tasks
        </NavLinks>
        {/* // )} */}
        <NavLinks
          to={`/project/${projectId}/chat`}
          activeStyle={{ color: '#feb800', backgroundColor: '#1b1b1b' }}
        >
          Chats
        </NavLinks>
      </div>
      <div>
        <NavLinks
          to={`/project/${projectId}/view`}
          activeStyle={{ color: '#feb800', backgroundColor: '#1b1b1b' }}
        >
          List
        </NavLinks>
      </div>
    </ProjectTabs>
  );
};

export default ProjectsActions;
