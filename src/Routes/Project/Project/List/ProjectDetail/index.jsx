import React from 'react';
import Moment from 'react-moment';

const ProjectDetail = ({ project }) => {
  return (
    <div style={{ padding: '10px 7px' }}>
      <h2>{project.projectname}</h2>
      <p>{project.projectcode}</p>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%' }}>
          <p>Start date</p>
          <p>
            <Moment format='Do MMM YYYY'>{project.actualstartdate}</Moment>
          </p>
        </div>
        <div style={{ width: '50%' }}>
          <p>Start date</p>
          <p>
            <Moment format='Do MMM YYYY'>{project.actualenddate}</Moment>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
