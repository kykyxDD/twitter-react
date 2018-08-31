import * as types from '../actions/actionTypes'; 

const initialState = {
	timeline: null,
	loading: false,
	error: false
};


export default function notes(state=initialState, action) {
  switch (action.type) {

		case types.RESET_PROFILE_TIMELINE:
			return {
				...state,
				loading: false,
				timeline: action.timeline,
				error: false
		};
		case types.RESET_PROFILE_TIMELINE_LOADING:
			return {
				...state,
				loading: true,
				timeline: null,
				error: false
			};
		case types.RESET_PROFILE_TIMELINE_ERROR:
			return {
				...state,
				loading: false,
				timeline: null,
				error: action.error
		};

    default:
      return state;
  }
}