import React from 'react';
import moment from 'moment';
import Moment from 'react-moment';
// Should add functionality for MVP that transfers tasks not completed in previous
// week to current week. Therefore we will have to look at work to be completed during this week

import TaskCard from './Card';

// Styles
import { MonthWrapper, WeekWrapper } from './Styles';

const TaskGrid = ({ tasks }) => {
  // current week
  const startOfWeek = moment().startOf('isoweek');
  const endOfWeek = moment().endOf('isoweek');
  const currentDay = moment();

  // next weeks
  const startOfWeekOne = moment().add(1, 'weeks').startOf('isoweek');
  const endOfWeekOne = moment().add(1, 'weeks').endOf('isoweek');
  const startOfWeekTwo = moment().add(2, 'weeks').startOf('isoweek');
  const endOfWeekTwo = moment().add(2, 'weeks').endOf('isoweek');
  const startOfWeekThree = moment().add(3, 'weeks').startOf('isoweek');
  const endOfWeekThree = moment().add(3, 'weeks').endOf('isoweek');
  return (
    <MonthWrapper>
      <WeekWrapper>
        <p>
          <Moment format='Do'>{startOfWeek}</Moment> <span>to </span>
          <Moment format='Do MMMM'>{endOfWeek}</Moment>
        </p>
        <div>
          {tasks
            .filter((task) => moment(task.actualstartdate) >= startOfWeek)
            .filter((task) => moment(task.actualstartdate) <= endOfWeek)
            .map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
        </div>
      </WeekWrapper>
      <WeekWrapper>
        <p>
          <Moment format='Do'>{startOfWeekOne}</Moment> <span>to </span>
          <Moment format='Do MMMM'>{endOfWeekOne}</Moment>
        </p>
        <div>
          {tasks
            .filter((task) => moment(task.actualstartdate) >= startOfWeekOne)
            .filter((task) => moment(task.actualstartdate) <= endOfWeekOne)
            .map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
        </div>
      </WeekWrapper>
      <WeekWrapper>
        <p>
          <Moment format='Do'>{startOfWeekTwo}</Moment> <span>to </span>
          <Moment format='Do MMMM'>{endOfWeekTwo}</Moment>
        </p>
        <div>
          {tasks
            .filter((task) => moment(task.actualstartdate) >= startOfWeekTwo)
            .filter((task) => moment(task.actualstartdate) <= endOfWeekTwo)
            .map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
        </div>
      </WeekWrapper>
      <WeekWrapper>
        <p>
          <Moment format='Do'>{startOfWeekThree}</Moment> <span>to </span>
          <Moment format='Do MMMM'>{endOfWeekThree}</Moment>
        </p>
        <div>
          {tasks
            .filter((task) => moment(task.actualstartdate) >= startOfWeekThree)
            .filter((task) => moment(task.actualstartdate) <= endOfWeekThree)
            .map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
        </div>
      </WeekWrapper>
    </MonthWrapper>
  );
};

export default TaskGrid;
