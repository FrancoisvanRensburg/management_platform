import React, { useState, Fragment } from 'react';

import DepartmentForm from './DepartmentForm';
import Department from './DepartmentItem';

// Styles
import { ItemsWrapper } from './Styles';

const ComapnyDepartments = () => {
  const [departments, setDempartments] = useState([
    { text: 'Accounting' },
    { text: 'Engineering' },
    { text: 'Software' },
    { text: 'Project Management' },
  ]);

  const addDepartment = (text) => {
    const newDepartment = [...departments, { text }];
    setDempartments(newDepartment);
  };
  return (
    <Fragment>
      <DepartmentForm addDepartment={addDepartment} />
      <ItemsWrapper>
        {departments.map((department, index) => (
          <Department key={index} index={index} department={department} />
        ))}
      </ItemsWrapper>
    </Fragment>
  );
};

export default ComapnyDepartments;
