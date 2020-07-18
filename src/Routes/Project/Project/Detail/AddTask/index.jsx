import React, { Fragment } from 'react';

import TaskForm from './Form';
import TaskItems from './TaskItem';

import { TaskContainer, ComponentHeader, TaskWrapper } from './Styles';

const Tasks = ({ project: { _id, tasks } }) => {
  return (
    <Fragment>
      <TaskContainer>
        <ComponentHeader>Project tasks</ComponentHeader>
        <TaskWrapper>
          <ul>
            {tasks.map((task) => (
              <TaskItems key={task._id} task={task} projectId={_id} />
            ))}
          </ul>

          <TaskForm projectId={_id} />
        </TaskWrapper>
      </TaskContainer>
    </Fragment>
  );
};

export default Tasks;
