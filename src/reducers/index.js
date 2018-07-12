import { combineReducers } from 'redux';
import user from "./user";

// const initialState = {
//   user: {
//     number: "+79788611630", 
//     email: 'kykyxDD@gmail.com',
//     photo: null,
//     name: 'kykyxDD',
//     login: 'kykyxdd'
//   }
// }


const rootReducer = combineReducers({
  user,
})
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     // case ADD_ARTICLE:
//     //   return { ...state, articles: state.articles.concat(action.payload) };
//     default:
//       return state;
//   }
// };
export default rootReducer;


// export default ponyApp;