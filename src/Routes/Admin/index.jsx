import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Routing
import PrivateRoute from '../../App/Routing';

import Spinner from '../../shared/components/Spinner/Spinner';
import AdminActions from './Actions';
import UserAdmin from './User';
import CompanyAdmin from './Company';
import ProfileAdmin from './Profile';
import ClientAdmin from './Client';

import { AdminPage, Container } from './Styles';
import { useSelector } from 'react-redux';

const Admin = () => {
  const user = useSelector((store) => store.user.user);
  return (
    <Router>
      {user === null ? (
        <Spinner />
      ) : (
        <AdminPage>
          <div style={{ marginLeft: '50px' }}>
            <h1 style={{ marginBottom: '5px' }}>
              Settings - <em>{user.name}</em>
            </h1>
            <p style={{ marginTop: '0px' }}>
              Welcome to the administrative workspace
            </p>
          </div>
          <AdminActions />
          <Container>
            <PrivateRoute path='/admin/users' component={UserAdmin} />
            <PrivateRoute path='/admin/account' component={CompanyAdmin} />
            <PrivateRoute path='/admin/profile' component={ProfileAdmin} />
            <PrivateRoute path='/admin/clients' component={ClientAdmin} />
          </Container>
        </AdminPage>
      )}
    </Router>
  );
};

export default Admin;
