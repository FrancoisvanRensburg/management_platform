import axios from 'axios';

import {
  GET_USER,
  USER_ERROR,
  GET_USERS,
  TASK_ERROR,
  GET_TASKS_USER,
  GET_USER_PROJECTS,
  PROJECT_ERROR,
  GET_TASK_USER,
  ADD_TASK_COMMENT,
} from './types';
import { setAlert } from './alertActions';

// Get the current user
export const getCurrentUser = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/users/me');

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Edit user
export const editUser = (values, edit = false) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/users/me', values, config);

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
    dispatch(setAlert(edit ? 'Profile updated' : 'Profile created', 'green'));
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get all users
export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/users');

    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
    dispatch(setAlert('Contributor added', 'green'));
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get all tasks for user
// remember to change the api end point to /api/user/tasks
export const getUserTasks = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/tasks');

    dispatch({
      type: GET_TASKS_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get a specific task
export const getUserTask = (taskId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/tasks/${taskId}`);

    dispatch({
      type: GET_TASK_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addTaskComment = (taskId, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(
      `/api/tasks/comment/${taskId}`,
      formData,
      config
    );
    dispatch({
      type: ADD_TASK_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get all projects for user
export const getUserProjects = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/projects');
    dispatch({
      type: GET_USER_PROJECTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
