import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import ProjectInfo from './Info';
import Tasks from './AddTask';
import TaskDetail from './TaskDetail';

import { DetailWrapper, LeftWrapper, RightWrapper } from './Styles';

const ProjectDetail = () => {
  const project = useSelector((store) => store.project.project);
  return (
    <Fragment>
      <DetailWrapper>
        <LeftWrapper>
          <ProjectInfo project={project} />
          <Tasks project={project} />
        </LeftWrapper>
        <RightWrapper>
          <TaskDetail project={project} />
        </RightWrapper>
      </DetailWrapper>
    </Fragment>
  );
};

export default ProjectDetail;
