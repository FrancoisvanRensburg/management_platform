import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';

import ProgressBar from '../../../../shared/components/ProgressBar';

import { StyledLink, Tcell } from '../Styles';

const ListItem = ({ project }) => {
  const RefreshPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 50);
  };
  return (
    <>
      <tr>
        <Tcell>{project.projectname}</Tcell>
        <Tcell>
          <div style={{ width: '80%', height: '24px' }}>
            <ProgressBar percentage={project.projectprogress} />
          </div>
        </Tcell>
        <Tcell>
          <Moment format='Do MMMM YYYY'>{project.actualstartdate}</Moment>
        </Tcell>
        <Tcell>
          <Moment format='Do MMMM YYYY'>{project.actualenddate}</Moment>
        </Tcell>
        <Tcell>
          {Math.round(
            moment(project.actualenddate).diff(moment(Date.now())) /
              (3600 * 1000) /
              24
          ).toFixed(0)}{' '}
          {'days'}
        </Tcell>
        <Tcell>
          <StyledLink
            to={`/project/${project._id}/overview`}
            onClick={RefreshPage}
          >
            View
          </StyledLink>
        </Tcell>
      </tr>
    </>
  );
};

export default ListItem;
