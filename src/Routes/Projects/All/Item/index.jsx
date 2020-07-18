import React from 'react';

import ProgressBar from '../../../../shared/components/ProgressBar';
import { progress } from '../../../../shared/hooks/projectProgress';

import { StyledLink, Item } from '../Styles';

const ProjectItem = ({
  project: { _id, projectname, projectmanager, client, tasks },
}) => {
  const RefreshPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 50);
  };
  return (
    <>
      <li>
        <Item>
          <span>{projectname}</span>
          <div style={{ width: '300px', height: '40px' }}>
            <ProgressBar percentage={progress(tasks)} />
          </div>
          <span>
            {projectmanager.firstname} {projectmanager.lastname}
          </span>
          {!client ? <span>No client found</span> : <span>{client.name}</span>}
          <StyledLink to={`/project/${_id}/overview`} onClick={RefreshPage}>
            view
          </StyledLink>
        </Item>
      </li>
    </>
  );
};

export default ProjectItem;
