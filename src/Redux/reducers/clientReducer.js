import { ADD_CLIENT, CLIENT_ERROR, GET_CLIENTS } from '../actions/types';

const initialState = {
  client: null,
  clients: [],
  projects: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_CLIENT:
      return {
        ...state,
        clients: [...state.clients, payload],
        loading: false,
      };
    case GET_CLIENTS:
      return {
        ...state,
        clients: payload,
        loading: false,
      };
    case CLIENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
