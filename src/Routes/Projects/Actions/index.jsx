import React from 'react';

import { ProjectsTabs, NavLinks } from './Styles';

const ProjectsActions = () => {
  return (
    <ProjectsTabs>
      <NavLinks
        to='/projects/all'
        activeStyle={{ color: '#feb800', backgroundColor: '#1b1b1b' }}
      >
        All projects
      </NavLinks>
      <NavLinks
        to='/projects/sector'
        activeStyle={{ color: '#feb800', backgroundColor: '#1b1b1b' }}
      >
        By sector
      </NavLinks>
    </ProjectsTabs>
  );
};

export default ProjectsActions;
