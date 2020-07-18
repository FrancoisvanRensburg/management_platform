import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { getUserTasks } from '../../../Redux/actions/userActions';

import TaskList from './List';
import TaskGrid from './Grid';

const UserTasks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserTasks());
  }, [dispatch]);
  const tasks = useSelector((store) => store.user.tasks);
  return (
    <div>
      <TaskGrid tasks={tasks} />
    </div>
  );
};

export default UserTasks;
