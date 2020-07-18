import React, { Fragment } from 'react';
import moment from 'moment';

import ProgressBar from '../../../../../shared/components/ProgressBar';

import { Tcell } from '../Styles';

const ListItem = ({ task }) => {
  const endDate = moment(task.actualenddate);
  const startDate = moment(task.actualstartdate);
  const currentDate = moment(Date.now());

  const durCalc = () => {
    return Math.round(
      (endDate.diff(startDate) / (3600 * 1000)) * (8 / 24) + 8
    ).toFixed(0);
  };

  const dueIn = () => {
    return Math.round(endDate.diff(currentDate) / (3600 * 1000) / 24).toFixed(
      0
    );
  };
  return (
    <Fragment>
      <tr>
        <Tcell>{task.taskname}</Tcell>
        <Tcell>
          <div style={{ width: '80%', height: '24px' }}>
            <ProgressBar percentage={task.progress} />
          </div>
        </Tcell>
        <Tcell>{dueIn()} days</Tcell>
        <Tcell>{durCalc()} hours</Tcell>
      </tr>
    </Fragment>
  );
};

export default ListItem;
