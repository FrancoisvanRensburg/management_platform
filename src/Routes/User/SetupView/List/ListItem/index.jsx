import React from 'react';
import moment from 'moment';
import Moment from 'react-moment';

import ProgressBar from '../../../../../shared/components/ProgressBar';

const ListItem = ({ task }) => {
  const endDate = moment(task.actualenddate);
  const startDate = moment(task.actualstartdate);
  const currentDate = moment(Date.now());
  return (
    <>
      <tr>
        <td>{task.taskname}</td>
        {/* <td>
          {!task.actualstartdate || !task.actualenddate
            ? 'Require due date or start date'
            : Math.round(
                moment(task.actualenddate).diff(moment(task.actualstartdate)) /
                  (3600 * 1000)
              )}
        </td> */}
        <td>
          {!task.actualenddate ? (
            'Due date not specified'
          ) : (
            <Moment format='MMM Do'>{task.actualenddate}</Moment>
          )}
        </td>
        <td>
          <div style={{ width: '80%', height: '24px' }}>
            <ProgressBar percentage={task.progress} />
          </div>
        </td>
        <td>{!task.effort ? 'No effort added' : task.effort}</td>
        {/* <td>{!task.assignee ? 'Not assigned' : task.assignee.name}</td> */}
      </tr>
    </>
  );
};

export default ListItem;
