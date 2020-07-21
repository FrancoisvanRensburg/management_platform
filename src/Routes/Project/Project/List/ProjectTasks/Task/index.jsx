import React from 'react';
import Moment from 'react-moment';

import TaskModal from './TaskModal';

const Task = ({ task, project }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '40px',
      }}
    >
      <div
        style={{
          border: '1px solid red',
          width: '25%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            margin: '0 10px 0 5px',
          }}
        >
          <TaskModal task={task} project={project} />
        </div>
        <span>{task.taskname}</span>
      </div>
      <div style={{ border: '1px solid red', width: '15%' }}>
        {!task.section ? <span>No section</span> : <span>{task.section}</span>}
      </div>
      <div style={{ border: '1px solid red', width: '15%' }}>
        {!task.assignee ? (
          <span>Not assigned</span>
        ) : (
          <span>{task.assignee}</span>
        )}
      </div>
      <div style={{ border: '1px solid red', width: '15%' }}>
        Fri 20 Mar 2020
      </div>
      <div style={{ border: '1px solid red', width: '15%' }}>
        Tue 28 Mar 2020
      </div>
      <div style={{ border: '1px solid red', width: '15%' }}>16 hrs</div>
    </div>
  );
};

export default Task;
