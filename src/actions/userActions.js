import * as types from '../actions/actionTypes'; 

export const resetPassword = reset => {
  console.log('resetPassword')
  return {
    type: types.RESET_USER_PASSWORD,
    reset
  }
}
export const resetClear = () => {
  console.log('resetClear')
  return {
    type: types.RESET_USER_PASSWORD_CLEAR
  }
}