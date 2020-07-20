import {
  GET_USER,
  USER_ERROR,
  GET_USERS,
  GET_TASKS_USER,
  TASK_ERROR,
  GET_TASK_USER,
  ADD_TASK_COMMENT,
  CLEAR_USER,
  GET_USER_PROJECTS,
  PROJECT_ERROR,
} from '../actions/types';

const initialState = {
  user: null,
  users: [],
  projects: [],
  tasks: [],
  task: null,
  loading: true,
  errors: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        user: null,
      };
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case GET_TASKS_USER:
      return {
        ...state,
        tasks: payload,
        loading: false,
      };
    case GET_TASK_USER:
      return {
        ...state,
        task: payload,
        loading: false,
      };
    case ADD_TASK_COMMENT:
      return {
        ...state,
        task: { ...state.task, comments: payload },
        loading: false,
      };
    case TASK_ERROR:
      return {
        ...state,
        error: payload,
        tasks: null,
        loading: false,
      };
    case GET_USER_PROJECTS:
      return {
        ...state,
        projects: payload,
        loading: false,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
        users: [],
        projects: [],
        tasks: [],
        task: null,
        loading: false,
      };
    case PROJECT_ERROR:
      return {
        ...state,
        error: payload,
        projects: null,
        loading: false,
      };
    default:
      return state;
  }
}
