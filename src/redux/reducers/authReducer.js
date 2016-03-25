// import { FETCH_TASKS, DISPLAY_ERROR, DISPLAY_MESSAGE } from '../constants'

//Define export reducer, slicing out user property from state.
const authReducer = (auth = {}, action) => {
  switch(action.type){
    default:
      return auth;
  }
}

export default authReducer