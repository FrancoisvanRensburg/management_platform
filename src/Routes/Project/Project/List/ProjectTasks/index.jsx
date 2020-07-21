import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Task from './Task';
import TaskForm from './Task/TaskForm';

const ProjectTasks = ({ project }) => {
  const tasks = useSelector((store) => store.project.project.tasks);
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>Project tasks</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ border: '1px solid red', width: '25%' }}>Task name</div>
        <div style={{ border: '1px solid red', width: '15%' }}>Task label</div>
        <div style={{ border: '1px solid red', width: '15%' }}>
          Task assignee
        </div>
        <div style={{ border: '1px solid red', width: '15%' }}>
          Task start date
        </div>
        <div style={{ border: '1px solid red', width: '15%' }}>
          Task end date
        </div>
        <div style={{ border: '1px solid red', width: '15%' }}>Task effort</div>
      </div>
      {tasks !== null &&
        tasks.map((task) => <Task key={task._id} task={task} />)}
      <TaskForm projectId={project._id} />
    </div>
  );
};

export default ProjectTasks;
