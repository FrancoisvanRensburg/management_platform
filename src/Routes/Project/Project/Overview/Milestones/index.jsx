import React from 'react';

import TaskItem from './Task';

import {
  MilestonesContainer,
  ComponentHeader,
  ComponentSubheader,
  ListItem,
} from './Styles';

const ProjectMilestone = ({ project: { tasks } }) => {
  return (
    <MilestonesContainer>
      <ComponentHeader>Milestones</ComponentHeader>
      <ComponentSubheader>Upcoming events</ComponentSubheader>
      <ListItem>
        <li>DevOps - push dashboard feature</li>
        <li>BEndDev - projects api route</li>
      </ListItem>
      <ComponentSubheader>Upcoming meetings</ComponentSubheader>
      <ListItem>
        <li>Internal progress meeting</li>
        <li>Client progress presentation</li>
      </ListItem>
      <div className='upcoming-tasks'>
        <ComponentSubheader>Upcoming tasks</ComponentSubheader>
        <div className='tasks-container'>
          {tasks.length > 0 ? (
            tasks
              .filter((task, idx) => idx < 3)
              .map((task) => <TaskItem key={task._id} task={task} />)
          ) : (
            <span>No upcoming tasks</span>
          )}
        </div>
      </div>
    </MilestonesContainer>
  );
};

export default ProjectMilestone;
