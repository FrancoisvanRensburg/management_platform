import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserActionNotifications } from '../../../../../../Redux/actions/notificationActions';

import NotificationCard from './NotificationCard';

const Dropdown = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserActionNotifications());
  }, [dispatch]);
  const notifications = useSelector(
    (store) => store.notification.actionNotifications
  );
  return (
    <div
      style={{
        width: '300px',
        height: 'auto',
        backgroundColor: 'black',
        border: '1px solid red',
        boxSizing: 'border-box',
      }}
    >
      {notifications === null ? (
        <div></div>
      ) : (
        notifications.map((notification) => (
          <NotificationCard
            key={notification._id}
            notification={notification}
          />
        ))
      )}
    </div>
  );
};

export default Dropdown;
