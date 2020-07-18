import React from 'react';
import { useSelector } from 'react-redux';

import ListItem from './ListItem';

import { TasksWrapper, ComponentHeader, Table, THead } from './Styles';

const UserTasks = () => {
  const tasks = useSelector((store) => store.user.tasks);
  {
    tasks &&
      tasks.sort((a, b) => {
        let dateA = new Date(a.actualenddate),
          dateB = new Date(b.actualenddate);
        return dateA - dateB;
      });
  }

  return (
    <TasksWrapper>
      <ComponentHeader>Tasks</ComponentHeader>
      <Table>
        <thead>
          <tr>
            <THead>Name</THead>
            <THead>Progress</THead>
            <THead>Due in</THead>
            <THead>Duration</THead>
          </tr>
        </thead>
        <tbody>
          {tasks === null || tasks.length === 0 ? (
            <tr>
              <td>No task assigned</td>
            </tr>
          ) : (
            tasks
              .filter((task) => task.progress < 100)
              .map((task) => <ListItem key={task._id} task={task} />)
          )}
        </tbody>
      </Table>
    </TasksWrapper>
  );
};

export default UserTasks;
