import axios from 'axios';

import { setAlert } from './alertActions';
import setAuthToken from '../../shared/utils/setAuthToken';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_USER,
  LOGOUT,
} from './types';

import { getCurrentUser } from './userActions';

// Load user (required to keep user logged in, imported at App.js)
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
    dispatch(getCurrentUser());
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register company and admin user
export const registerCompany = ({
  longname,
  shortname,
  projectprefix,
  email,
  password,
  firstname,
  lastname,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    longname,
    shortname,
    projectprefix,
    email,
    password,
    firstname,
    lastname,
  });

  try {
    const res = await axios.post('api/register/company', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// User login
export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(`api/auth`, body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// User logout / clear profile
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_USER });
  dispatch({ type: LOGOUT });
};
