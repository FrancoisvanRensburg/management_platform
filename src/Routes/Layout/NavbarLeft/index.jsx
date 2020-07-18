import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import CreateProject from '../../Project/NewProject/CreateProject';

import { ReactComponent as TaskIcon } from '../../../App/assets/images/task.svg';
import { ReactComponent as ProjectIcon } from '../../../App/assets/images/project.svg';
import { ReactComponent as ChatIcon } from '../../../App/assets/images/chat.svg';
import { ReactComponent as ApprovalIcon } from '../../../App/assets/images/approvals.svg';
import { ReactComponent as TeamIcon } from '../../../App/assets/images/team.svg';
import { ReactComponent as DashboardIcon } from '../../../App/assets/images/dashboard.svg';
import { ReactComponent as TimeIcon } from '../../../App/assets/images/time.svg';
import { ReactComponent as SettingsIcon } from '../../../App/assets/images/settings.svg';
import { ReactComponent as HelpIcon } from '../../../App/assets/images/help.svg';

import { NavLeft, LinkText, LinkTo, Divide, New, ModalBox } from './Styles';

const NavbarLeft = ({ open, setOpen }) => {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const user = useSelector((store) => store.auth.user);
  return (
    <Fragment>
      {isAuthenticated && (
        <NavLeft open={open}>
          <li>
            <div style={{ height: '50px' }} />
          </li>
          {user === null ? (
            <div>Loading</div>
          ) : user.usertype === 'Adm' || user.usertype === 'Pm' ? (
            <div>
              <CreateProject />
            </div>
          ) : null}
          {open && (
            <ul>
              <li onClick={() => setOpen(!open)}>
                <LinkTo to='/user/tasks'>
                  <TaskIcon />
                  <LinkText>TASKS</LinkText>
                </LinkTo>
              </li>
              <li onClick={() => setOpen(!open)}>
                <LinkTo to='/projects/all'>
                  <ProjectIcon />
                  <LinkText>PROJECTS</LinkText>
                </LinkTo>
              </li>
              <li onClick={() => setOpen(!open)}>
                <LinkTo to='#!'>
                  <ChatIcon />
                  <LinkText>CHATS</LinkText>
                </LinkTo>
              </li>
              <li onClick={() => setOpen(!open)}>
                <LinkTo to='/approvals'>
                  <ApprovalIcon />
                  <LinkText>APPROVALS</LinkText>
                </LinkTo>
              </li>
              <li onClick={() => setOpen(!open)}>
                <LinkTo to='#!'>
                  <TeamIcon />
                  <LinkText>TEAMS</LinkText>
                </LinkTo>
              </li>
              <li onClick={() => setOpen(!open)}>
                <LinkTo to='#!'>
                  <DashboardIcon />
                  <LinkText>DASHBOARD</LinkText>
                </LinkTo>
              </li>
              <li onClick={() => setOpen(!open)}>
                <LinkTo to='#!'>
                  <TimeIcon />
                  <LinkText>TIME</LinkText>
                </LinkTo>
              </li>
              <Divide />
              <li onClick={() => setOpen(!open)}>
                <LinkTo to='/admin/profile'>
                  <SettingsIcon />
                  <LinkText>ADMIN</LinkText>
                </LinkTo>
              </li>
              <li onClick={() => setOpen(!open)}>
                <LinkTo to='#!'>
                  <HelpIcon />
                  <LinkText>HELP</LinkText>
                </LinkTo>
              </li>
            </ul>
          )}
        </NavLeft>
      )}
    </Fragment>
  );
};

NavbarLeft.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default NavbarLeft;
