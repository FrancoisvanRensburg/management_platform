import React from 'react';
import { Link } from 'react-router-dom';

import ProgressBar from '../../../../../../shared/components/ProgressBar';

const TaskItem = ({ task: { _id, assignee, taskname, progress } }) => {
  return (
    <div className='prj-tasks'>
      <Link to={`/tasks/${_id}`}>
        <div style={{ margin: '10px auto' }}>
          <span style={{ width: '100%', textAlign: 'center' }}>{taskname}</span>
          <div style={{ width: '100%', height: '12px' }}>
            <ProgressBar percentage={progress} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TaskItem;
