import * as types from '../actions/actionTypes'; 

const initialState = {
	profile: null,
	loading: false,
	error: false
};


export default function notes(state=initialState, action) {
  switch (action.type) {
    case types.RESET_PAGE_PROFILE:
      return {
      	...state,
		loading: false,
		profile: action.profile,
		error: false
	  };
    case types.RESET_PAGE_PROFILE_LOADING:
      return {
      	...state,
      	loading: true,
		profile: null,
		error: false
      };
    case types.RESET_PAGE_PROFILE_ERROR:
      return {
      	...state,
		loading: false,
		profile: null,
		error: action.error
	  };
    default:
      return state;
  }
}