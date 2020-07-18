import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Routing
import PrivateRoute from '../../App/Routing';

import Spinner from '../../shared/components/Spinner/Spinner';
import UserActions from './Actions';
import UserOverview from './Overview';
import UserTasks from './Tasks';
import UserProjects from './Projects';
import UserTaskListView from './SetupView/List';

import { UserPage, Container } from './Styles';

const User = () => {
  const user = useSelector((store) => store.user.user);
  return (
    <Router>
      {user === null ? (
        <Spinner />
      ) : (
        <UserPage>
          <div style={{ marginLeft: '50px' }}>
            <h1 style={{ marginBottom: '5px' }}>
              User workspace - <em>{user.name}</em>
            </h1>
            <p>User dashboard</p>
          </div>
          <UserActions />
          <Container>
            <PrivateRoute
              exact
              path='/user/overview'
              component={UserOverview}
            />
            <PrivateRoute exact path='/user/tasks' component={UserTasks} />
            <PrivateRoute
              exact
              path='/user/projects'
              component={UserProjects}
            />
            <PrivateRoute
              exact
              path='/user/tasklist'
              component={UserTaskListView}
            />
          </Container>
        </UserPage>
      )}
    </Router>
  );
};

export default User;
