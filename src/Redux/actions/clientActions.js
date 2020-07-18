import axios from 'axios';

import { ADD_CLIENT, CLIENT_ERROR, GET_CLIENTS } from './types';

// Add Client
export const addClient = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/clients', formData, config);

    dispatch({
      type: ADD_CLIENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CLIENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getClients = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/clients');

    dispatch({
      type: GET_CLIENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CLIENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
