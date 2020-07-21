import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProjectTasks } from '../../../../../Redux/actions/projectActions';

import Task from './Task';
import TaskForm from './TaskForm';

import { Table, THead } from './Styles';

const ProjectTasks = ({ project }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjectTasks(project._id));
  }, [dispatch]);
  const tasks = useSelector((store) => store.project.tasks);
  return (
    <div style={{ boxSizing: 'border-box' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Project tasks</h1>
      </div>
      <Table>
        <thead>
          <tr>
            <THead style={{ width: '24%' }}>Task name</THead>
            <THead style={{ width: '14%' }}>Section</THead>
            <THead style={{ width: '14%' }}>Start date</THead>
            <THead style={{ width: '14%' }}>End date</THead>
            <THead style={{ width: '17%' }}>Assignee</THead>
            <THead style={{ width: '17%' }}>Status</THead>
          </tr>
        </thead>
        <tbody>
          {tasks !== null &&
            tasks.map((task) => (
              <Task key={task._id} task={task} project={project} />
            ))}
        </tbody>
      </Table>

      <TaskForm projectId={project._id} />
    </div>
  );
};

export default ProjectTasks;
