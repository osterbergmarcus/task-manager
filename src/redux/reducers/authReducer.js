// import { FETCH_TASKS, DISPLAY_ERROR, DISPLAY_MESSAGE } from '../constants'
import initialState from '../initialState'
//Define export reducer, slicing out user property from state.
const authReducer = (state = initialState.auth, action) => {
  switch(action.type){
    case 'LOGIN':
      return Object.assign({}, state, {status: 'AWAITING_AUTH'})
    case 'LOGOUT':
      return Object.assign({}, initialState.auth)
    case 'LOGGED_IN_USER':
      return Object.assign({}, state, {
              status: 'LOGGED_IN',
              username: action.username,
              uid: action.uid
             })
    default: 
      return state
  }
}

export default authReducer