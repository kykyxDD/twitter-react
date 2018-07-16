import * as types from '../actions/actionTypes'; 

export const getProfilePage = screen_name => {
  return {
    type: types.RESET_PAGE_PROFILE,
    screen_name
  }
}