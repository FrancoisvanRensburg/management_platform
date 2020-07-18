import axios from 'axios';

import {
  GET_PROJECT,
  GET_PROJECTS,
  PROJECT_ERROR,
  ADD_TASK,
  TASK_ERROR,
  GET_TASK,
  ADD_COMMENT,
  ADD_PROJECT_COMMENT,
  GET_TASKS_PROJECT,
  ADD_CONTRIBUTOR,
  PROJECT_MISC,
} from './types';

// Create a project
export const createProject = (values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/api/projects', values, config);

    dispatch({
      type: GET_PROJECT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//   Get one project
export const getProject = (projectId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/projects/${projectId}`);

    dispatch({
      type: GET_PROJECT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//   Get all projects
export const getAllProjects = (history) => async (dispatch) => {
  try {
    const res = await axios.get('/api/projects/company');

    dispatch({
      type: GET_PROJECTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add a task linked to a project
export const addTask = (projectId, values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(`/api/tasks/${projectId}`, values, config);
    dispatch({
      type: ADD_TASK,
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
export const getTask = (taskId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/tasks/${taskId}`);

    dispatch({
      type: GET_TASK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update a task
export const updateTask = (taskId, values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(`/api/tasks/${taskId}`, values, config);
    dispatch({
      type: GET_TASK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateProjectContributors = (projectId, values) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(
      `/api/projects/contributors/${projectId}`,
      values,
      config
    );
    dispatch({
      type: ADD_CONTRIBUTOR,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateProjectManager = (projectId, values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post(
      `/api/projects/manager/${projectId}`,
      values,
      config
    );
    dispatch({
      type: PROJECT_MISC,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateProjectSetup = (projectId, values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(
      `/api/projects/setup/${projectId}`,
      values,
      config
    );
    dispatch({
      type: GET_PROJECT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// // Comment on a task
export const addTaskCommentProject = (taskId, formData) => async (dispatch) => {
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
      type: ADD_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// // Comment on a Project
export const addCommentProject = (projectId, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(
      `/api/projects/comment/${projectId}`,
      formData,
      config
    );
    dispatch({
      type: ADD_PROJECT_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// remember to change api endpoint to /api/projects/tasks/:projectId
export const getProjectTasks = (projectId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/tasks/project/${projectId}`);
    dispatch({
      type: GET_TASKS_PROJECT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
