import * as types from '../actions/actionTypes'; 
import axios from 'axios';
import { url } from "../data/urlApi";

const fetchProfileTimeline = timeline => {
  return {
    type: types.RESET_PROFILE_TIMELINE,
    timeline
  }
};

const loadProfileTimeline = () => {
  return {
    type: types.RESET_PROFILE_TIMELINE_LOADING
  }
};
const getProfileTimelineError = error => {
  return {
    type: types.RESET_PROFILE_TIMELINE_ERROR,
    error
  };
}

export const getProfileTimeline= screen_name => {
  let req = axios(`${url}/users/timeline/${screen_name}`)

  return (dispatch) => {
    dispatch(loadProfileTimeline())
    req.then(res=> {
      dispatch(fetchProfileTimeline(res.data))
    }).catch(err => {
      dispatch(getProfileTimelineError(err))
    })
  }
}