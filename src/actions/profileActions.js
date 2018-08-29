import * as types from '../actions/actionTypes'; 
import axios from 'axios';
const url = process.env.NODE_ENV === 'production' ? "/api" : "http://localhost:5000/api"

const fetchProfile = (profile) => {
  return {
    type: types.RESET_PAGE_PROFILE,
    profile
  }
};

const loadProfile = () => {
  return {
    type: types.RESET_PAGE_PROFILE_LOADING
  }
};
const getProfilePageError = error => {
  return {
    type: types.RESET_PAGE_PROFILE_ERROR,
    error
  };
}



export const getProfilePage = screen_name => {
  let req = axios(`${url}/users/show/${screen_name}`)

  return (dispatch) => {
    dispatch(loadProfile())
    req.then(res=> {
      dispatch(fetchProfile(res.data))
    }).catch(err => {
      dispatch(getProfilePageError(err))
    })
  }
}


