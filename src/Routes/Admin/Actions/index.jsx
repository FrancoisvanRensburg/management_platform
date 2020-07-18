import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { AdminTabs, NavLinks } from './Styles';

const AdminActions = () => {
  const user = useSelector((store) => store.auth.user);

  const authLinks = (
    <Fragment>
      <NavLinks
        to='/admin/account'
        activeStyle={{ color: '#feb800', backgroundColor: '#1b1b1b' }}
      >
        Account
      </NavLinks>
      <NavLinks
        to='/admin/users'
        activeStyle={{ color: '#feb800', backgroundColor: '#1b1b1b' }}
      >
        Users
      </NavLinks>
      <NavLinks
        to='/admin/clients'
        activeStyle={{ color: '#feb800', backgroundColor: '#1b1b1b' }}
      >
        Clients
      </NavLinks>
    </Fragment>
  );

  const hrLinks = (
    <Fragment>
      <NavLinks
        to='/admin/users'
        activeStyle={{ color: '#feb800', backgroundColor: '#1b1b1b' }}
      >
        Users
      </NavLinks>
      <NavLinks
        to='/admin/clients'
        activeStyle={{ color: '#feb800', backgroundColor: '#1b1b1b' }}
      >
        Clients
      </NavLinks>
    </Fragment>
  );
  return (
    <Fragment>
      {user === null ? (
        <h1>Loading...</h1>
      ) : (
        <Fragment>
          <AdminTabs>
            <NavLinks
              to='/admin/profile'
              activeStyle={{ color: '#feb800', backgroundColor: '#1b1b1b' }}
            >
              Profile
            </NavLinks>
            {user.usertype === 'Adm' && <Fragment>{authLinks}</Fragment>}
            {user.usertype === 'Hr' && <Fragment>{hrLinks}</Fragment>}
          </AdminTabs>
        </Fragment>
      )}
    </Fragment>
  );
};

export default AdminActions;
