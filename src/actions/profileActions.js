import * as types from '../actions/actionTypes'; 
import axios from 'axios';
const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:4000/api/v1"


export const getProfilePage = screen_name => {
  // console.log(this)
  axios(`${url}/users/show/${screen_name}`).then(res=>{
    console.log('res', res.data)
  }).catch(err => err)
  return {
    type: types.RESET_PAGE_PROFILE,
    screen_name
  }
  /*return dispatch => {
    axios(`${url}/users/show/${screen_name}`).then(res=>{
      console.log('res', res.data)
      dispatch({
        type: types.RESET_PAGE_PROFILE,
        data: res.data
      })
    }).catch(err => err)
  }*/
}