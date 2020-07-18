import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Moment from 'react-moment';

import { getProjectTasks } from '../../../../../Redux/actions/projectActions';

import ListItem from './ListItem';

import { Table, THead } from './Styles';

const ProjectListView = () => {
  const tasks = useSelector((store) => store.project.tasks);
  const project = useSelector((store) => store.project.project);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectTasks(project._id));
  }, [dispatch, project._id]);

  return (
    <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1>Project task list</h1>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <span>{'Today'}</span>
        <span>{' - '}</span>
        <Moment format='Do MMM'>{moment(Date.now())}</Moment>
      </div>
      <Table>
        <thead>
          <tr>
            <THead>Task name</THead>
            <THead>Duration</THead>
            <THead>Due date</THead>
            <THead>Progress</THead>
            <THead>Effort</THead>
            <THead>Assignee</THead>
          </tr>
        </thead>
        {tasks !== null &&
          tasks.map((task) => <ListItem key={task._id} task={task} />)}
      </Table>
    </div>
  );
};

export default ProjectListView;
