import React from 'react';

const NotificationCard = ({ notification }) => {
  return (
    <div>
      <h1>{notification.notificationType}</h1>
    </div>
  );
};

export default NotificationCard;
