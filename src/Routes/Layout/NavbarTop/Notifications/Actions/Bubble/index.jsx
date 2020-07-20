import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as AlertIcon } from '../../../../../../App/assets/images/alert.svg';

import Dropdown from '../Dropdown';

const Bubble = () => {
  const notifications = useSelector(
    (store) => store.auth.user.actionnotifications
  );

  const [displayNotificationDropdown, toggleNotificationDropdown] = useState(
    false
  );

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'relative',
        }}
        onClick={() => toggleNotificationDropdown(!displayNotificationDropdown)}
      >
        <div
          style={{
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            backgroundColor: 'red',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '12px',
            position: 'absolute',
            top: '0px',
            right: '0px',
          }}
        >
          {notifications === null ? 0 : notifications.length}
        </div>
        <AlertIcon />
      </div>
      {displayNotificationDropdown && (
        <div style={{ position: 'absolute', top: '35px', right: '-30px' }}>
          <Dropdown />
        </div>
      )}
    </div>
  );
};

export default Bubble;
