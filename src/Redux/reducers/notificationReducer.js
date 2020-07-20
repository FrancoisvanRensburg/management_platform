import {
  GET_ACTION_NOTIFICATIONS,
  GET_MESSAGE_NOTIFICATIONS,
  NOTIFICATION_ERROR,
} from '../actions/types';

const initialState = {
  actionNotifications: [],
  messageNotifications: [],
  actionNotification: null,
  messageNotification: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ACTION_NOTIFICATIONS:
      return {
        ...state,
        actionNotifications: payload,
        loading: false,
      };
    case NOTIFICATION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
