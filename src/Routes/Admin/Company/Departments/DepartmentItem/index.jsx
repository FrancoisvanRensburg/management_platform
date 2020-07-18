import React from 'react';

import { ItemText } from '../Styles';

const Department = ({ department }) => {
  return <ItemText>{department.text}</ItemText>;
};

export default Department;
