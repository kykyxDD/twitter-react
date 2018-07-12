import * as types from '../actions/actionTypes';  

const initialState = {
  number: "+79788611630", 
  email: 'kykyxDD@gmail.com',
  photo: null,
  name: 'kykyxDD',
  login: 'kykyxdd',
  reset: {
    email: false,
    phone: false
  }
};


export default function notes(state=initialState, action) {
  switch (action.type) {
    case types.RESET_USER_PASSWORD:
      state.reset[action.reset] = true
      return state;

    case types.RESET_USER_PASSWORD_CLEAR:
      console.log(state.reset)
      Object.keys(state.reset).forEach((key)=>{
        console.log(key)
        state.reset[key] = false
      })
      return state;
    default:
      return state;
  }
}