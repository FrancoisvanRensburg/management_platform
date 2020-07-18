import {
  GET_PROJECT,
  GET_PROJECTS,
  PROJECT_ERROR,
  ADD_TASK,
  TASK_ERROR,
  GET_TASK,
  ADD_COMMENT,
  ADD_PROJECT_COMMENT,
  ADD_CONTRIBUTOR,
  PROJECT_MISC,
  GET_TASKS_PROJECT,
} from '../actions/types';

const initialState = {
  projects: [],
  project: null,
  task: null,
  tasks: [],
  loading: true,
  errors: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECT:
      return {
        ...state,
        project: payload,
        loading: false,
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
        loading: false,
      };
    case GET_TASK:
      return {
        ...state,
        task: payload,
        loading: false,
      };
    case ADD_TASK:
      return {
        ...state,
        project: { ...state.project, tasks: payload },
        loading: false,
      };
    case PROJECT_MISC:
      return {
        ...state,
        project: { ...state.project, projectmanager: payload },
        loading: false,
      };
    case ADD_CONTRIBUTOR:
      return {
        ...state,
        project: { ...state.project, contributors: payload },
        // contributors: payload,
        loading: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        task: { ...state.task, comments: payload },
        loading: false,
      };
    case ADD_PROJECT_COMMENT:
      return {
        ...state,
        project: { ...state.project, comments: payload },
        loading: false,
      };
    case GET_TASKS_PROJECT:
      return {
        ...state,
        tasks: payload,
        loading: false,
      };
    case PROJECT_ERROR:
    case TASK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
