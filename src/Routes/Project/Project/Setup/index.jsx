import React from 'react';
import { useSelector } from 'react-redux';

import ProjectContributors from './Contributors';
import ProjectDetail from './ProjectDetail';
import ProjectClient from './Client';
import ProjectMisc from './ProjectMisc';

const ProjectSetup = () => {
  const project = useSelector((store) => store.project.project);

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <div style={{ width: '50%' }}>
          <ProjectContributors projectId={project._id} />
        </div>
        <div style={{ width: '50%' }}>
          <ProjectDetail />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ width: '50%' }}>
          <ProjectMisc />
        </div>
        <div style={{ width: '50%' }}>
          <ProjectClient projectId={project._id} />
        </div>
      </div>
    </div>
  );
};

export default ProjectSetup;
