import { combineReducers } from 'redux';
import user from "./user";
import profile from "./profilePage";

const rootReducer = combineReducers({
  user,
  stateProfile:profile
});

export default rootReducer