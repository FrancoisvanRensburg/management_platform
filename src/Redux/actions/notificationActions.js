import axios from 'axios';

import {
  GET_ACTION_NOTIFICATIONS,
  GET_MESSAGE_NOTIFICATIONS,
  NOTIFICATION_ERROR,
} from './types';

// Get user notifications
export const getUserActionNotifications = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/notifications');

    dispatch({
      type: GET_ACTION_NOTIFICATIONS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NOTIFICATION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
