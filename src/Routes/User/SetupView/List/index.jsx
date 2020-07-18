import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Moment from 'react-moment';

import { getUserTasks } from '../../../../Redux/actions/userActions';

import ListItem from './ListItem';

import { Table, THead } from './Styles';

const UserTaskListView = () => {
  const tasks = useSelector((store) => store.user.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserTasks(tasks));
  }, [dispatch]);

  return (
    <div>
      <h1>User task list</h1>
      <div>
        <Moment format='Do MMM'>{moment(Date.now())}</Moment>
      </div>
      <Table>
        <thead>
          <tr>
            <THead>Task name</THead>
            <THead>Due date</THead>
            <THead>Progress</THead>
            <THead>Effort</THead>
          </tr>
        </thead>
        {tasks !== null &&
          tasks.map((task) => <ListItem key={task._id} task={task} />)}
      </Table>
    </div>
  );
};

export default UserTaskListView;
