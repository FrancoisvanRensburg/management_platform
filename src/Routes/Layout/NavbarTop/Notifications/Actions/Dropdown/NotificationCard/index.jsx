import React from 'react';
import Moment from 'react-moment';

import { NotificationItem } from './Styles';

const NotificationCard = ({ notification }) => {
  return (
    <NotificationItem>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>{notification.notificationType}</h2>
        <span>
          <Moment format='Do MMM, HH:mm'>{notification.date}</Moment>
        </span>
      </div>
      <p>A task has been assigned to you</p>
    </NotificationItem>
  );
};

export default NotificationCard;
