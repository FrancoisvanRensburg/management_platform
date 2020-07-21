// Remember to change waffle and import it with the modal code in it if it works

import React from 'react';

// import { Waffle } from '../../../../../../shared/components/Buttons';
import TaskModal from './TaskModal';

const Task = ({ task }) => {
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
          <TaskModal task={task} />
        </div>
        <span>{task.taskname}</span>
      </div>
      <div style={{ border: '1px solid red', width: '15%' }}>Section 1</div>
      <div style={{ border: '1px solid red', width: '15%' }}>Unassigned</div>
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
