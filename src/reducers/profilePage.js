import * as types from '../actions/actionTypes';  
import { profiles } from '../data/profiles';

const initialState = null;


export default function notes(state=initialState, action) {
  switch (action.type) {
    case types.RESET_PAGE_PROFILE:
      if(profiles[action.screen_name]) {
        state = profiles[action.screen_name]
      }
      return state;
    default:
      return state;
  }
}