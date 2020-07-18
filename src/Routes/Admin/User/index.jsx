import React from 'react';

import AddUser from './AddUser';
import UserList from './Users';

import { UserBoard } from './Styles';

const UserAdmin = () => {
  return (
    <UserBoard>
      <AddUser />
      {/* </div> */}
      <UserList />
    </UserBoard>
  );
};

export default UserAdmin;
