import { combineReducers } from 'redux';
import user from "./user";
import profile from "./profilePage";
import timeline from "./timeline";

const rootReducer = combineReducers({
  user,
  stateProfile: profile,
  stateTimeline: timeline
});

export default rootReducer