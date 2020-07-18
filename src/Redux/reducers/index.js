import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import authReducer from './authReducer';
import companyReducer from './companyReducer';
import clientReducer from './clientReducer';
import userReducer from './userReducer';
import projectReducer from './projectReducer';

export default combineReducers({
  alert: alertReducer,
  auth: authReducer,
  company: companyReducer,
  user: userReducer,
  project: projectReducer,
  client: clientReducer,
});
