import * as types from '../actions/actionTypes'; 

const initialState = {
	profile: null,
	loading: false,
	error: false,
	timeline: null,
	loadingTimeline: false,
	errorTimeline: false,
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
		
		
		/* timeline */
		case types.RESET_PROFILE_TIMELINE:
			return {
				...state,
				loadingTimeline: false,
				timeline: action.timeline,
				errorTimeline: false
		};
		case types.RESET_PROFILE_TIMELINE_LOADING:
			return {
				...state,
				loadingTimeline: true,
				timeline: null,
				errorTimeline: false
			};
		case types.RESET_PROFILE_TIMELINE_ERROR:
			return {
				...state,
				loadingTimeline: false,
				timeline: null,
				errorTimeline: action.error
		};

    default:
      return state;
  }
}