import React from 'react';
import { useSelector } from 'react-redux';

import ProjectDetail from './ProjectDetail';
import ProjectSecions from './ProjectSections';
import ProjectTasks from './ProjectTasks';

const List = () => {
  const project = useSelector((store) => store.project.project);
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '30%', border: '1px solid red' }}>
        <ProjectDetail project={project} />
        <ProjectSecions project={project} />
      </div>
      <div
        style={{
          width: '70%',
          border: '1px solid red',
        }}
      >
        <ProjectTasks project={project} />
      </div>
    </div>
  );
};

export default List;
