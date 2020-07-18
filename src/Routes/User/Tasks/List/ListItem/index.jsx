import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { getUserTask } from '../../../../../Redux/actions/userActions';

import ProgressBar from '../../../../../shared/components/ProgressBar';
import Task from './Task';
import Modal from '../../../../../shared/components/Modal';

import { ListItemComponent, ComponentProgress } from '../Styles';

const ListItem = ({ task }) => {
  const dispatch = useDispatch();
  // Calculation for this week
  const startOfWeek = moment().startOf('isoweek');
  const endOfWeek = moment().endOf('isoweek');
  const startOfNextWeek = moment().add(1, 'weeks').startOf('isoweek');
  const endOfNextWeek = moment().add(1, 'weeks').endOf('isoweek');
  const endDate = moment(task.actualenddate);
  const startDate = moment(task.actualstartdate);

  let weekCalc = 0;
  let taskMargin = 0;
  let rightMargin = 0;
  if (startDate > endOfWeek) {
    weekCalc = Math.round(
      endOfNextWeek.diff(startOfNextWeek) / (3600 * 1000) / 24
    );
    taskMargin =
      (startDate.diff(startOfNextWeek) / (3600 * 1000) / 24 / weekCalc) * 100;

    rightMargin =
      100 -
      (endDate.diff(startOfNextWeek) / endOfNextWeek.diff(startOfNextWeek)) *
        100;
  } else {
    weekCalc = Math.round(endOfWeek.diff(startOfWeek) / (3600 * 1000) / 24);

    taskMargin =
      (startDate.diff(startOfWeek) / (3600 * 1000) / 24 / weekCalc) * 100;

    rightMargin =
      100 - (endDate.diff(startOfWeek) / endOfWeek.diff(startOfWeek)) * 100;
  }

  const listEvent = () => {
    dispatch(getUserTask(task._id));
  };

  return (
    <>
      <li
        style={{
          margin: `0 ${rightMargin}% 10px ${taskMargin}%`,
        }}
      >
        <ListItemComponent onClick={listEvent}>
          <Modal modalText={task.taskname}>
            <Task />
          </Modal>
        </ListItemComponent>
        <ComponentProgress style={{ height: '10px', width: '100%' }}>
          <ProgressBar percentage={task.progress} />
        </ComponentProgress>
      </li>
    </>
  );
};

export default ListItem;
