import React from 'react';

import { UserTabs, NavLinks } from './Styles';

const UserActions = () => {
  return (
    <UserTabs>
      <div>
        <NavLinks
          to='/user/overview'
          activeStyle={{ color: '#feb800', backgroundColor: '#1b1b1b' }}
        >
          Overview
        </NavLinks>
        <NavLinks
          to='/user/tasks'
          activeStyle={{ color: '#feb800', backgroundColor: '#1b1b1b' }}
        >
          Tasks
        </NavLinks>
        <NavLinks
          to='/user/projects'
          activeStyle={{ color: '#feb800', backgroundColor: '#1b1b1b' }}
        >
          Projects
        </NavLinks>
        <NavLinks
          to='/user/calendar'
          activeStyle={{ color: '#feb800', backgroundColor: '#1b1b1b' }}
        >
          Calendar
        </NavLinks>
      </div>
      <div>
        <NavLinks
          to={`/user/tasklist`}
          activeStyle={{ color: '#feb800', backgroundColor: '#1b1b1b' }}
        >
          List
        </NavLinks>
      </div>
    </UserTabs>
  );
};

export default UserActions;
