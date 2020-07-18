import React, { Fragment } from 'react';
import Moment from 'react-moment';

import ProgressBar from '../../../../../shared/components/ProgressBar';

import { Tcell } from '../Styles';

const ListItem = ({ project }) => {
  return (
    <Fragment>
      <tr>
        <Tcell>{project.projectname}</Tcell>
        <Tcell>
          <div style={{ width: '80%', height: '24px' }}>
            <ProgressBar percentage={project.projectprogress} />
          </div>
        </Tcell>
        <Tcell>
          <Moment format='YYYY/MM/DD'>{project.actualstartdate}</Moment>
        </Tcell>
        <Tcell>
          <Moment format='YYYY/MM/DD'>{project.actualenddate}</Moment>
        </Tcell>
      </tr>
    </Fragment>
  );
};

export default ListItem;
