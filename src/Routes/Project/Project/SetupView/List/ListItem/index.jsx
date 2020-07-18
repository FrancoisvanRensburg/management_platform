import React from 'react';
import moment from 'moment';
import Moment from 'react-moment';

import ProgressBar from '../../../../../../shared/components/ProgressBar';

import { Tcell } from '../Styles';

const ListItem = ({ task }) => {
  const endDate = moment(task.actualenddate);
  const startDate = moment(task.actualstartdate);
  const currentDate = moment(Date.now());
  return (
    <>
      <tr>
        <Tcell>{task.taskname}</Tcell>
        <Tcell>
          {!task.actualstartdate || !task.actualenddate
            ? 'Require due date or start date'
            : Math.round(
                moment(task.actualenddate).diff(moment(task.actualstartdate)) /
                  (3600 * 1000)
              )}
        </Tcell>
        <Tcell>
          {!task.actualenddate ? (
            'Due date not specified'
          ) : (
            <Moment format='MMM Do'>{task.actualenddate}</Moment>
          )}
        </Tcell>
        <Tcell>
          <div style={{ width: '80%', height: '24px' }}>
            <ProgressBar percentage={task.progress} />
          </div>
        </Tcell>
        <Tcell>{!task.effort ? 'No effort added' : task.effort}</Tcell>
        <Tcell>{!task.assignee ? 'Not assigned' : task.assignee.name}</Tcell>
      </tr>
    </>
  );
};

export default ListItem;
