import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import {
  getUserTasks,
  getUserProjects,
} from '../../../Redux/actions/userActions';

import Spinner from '../../../shared/components/Spinner/Spinner';
import UserMilestones from './Milestones';
import UserTasks from './Tasks';
import UserProgress from './Progress';
import UserProjects from './Projects';

import {
  OverviewWrapper,
  LeftWrapper,
  RightWrapper,
  BottomWrapper,
} from './Styles';

const UserOverview = () => {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserTasks());
    dispatch(getUserProjects());
  }, [dispatch]);

  return (
    <Fragment>
      {user === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                marginBottom: '20px',
              }}
            >
              <div style={{ width: '50%' }}>
                <UserMilestones />
              </div>
              <div style={{ width: '50%' }}>
                <UserProgress />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                marginBottom: '20px',
              }}
            >
              <div style={{ width: '50%' }}>
                <UserTasks />
              </div>
              <div style={{ width: '50%' }}>
                <UserProjects />
              </div>
            </div>
          </div>
          <div>
            <h1>Schedule</h1>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default UserOverview;
