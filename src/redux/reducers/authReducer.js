import { LOGIN, LOGOUT, USER_LOGGED_IN } from '../constants'
import initialState from '../initialState'

//Define export reducer, slicing out user property from state.
const authReducer = (state = initialState.auth, action) => {
  switch(action.type) {
    case LOGIN:
      return Object.assign({}, state, { status: action.status })
    case LOGOUT:
      return Object.assign({}, initialState.auth)
    case USER_LOGGED_IN:
      return Object.assign({}, state, {
              status: action.status,
              username: action.username,
              uid: action.uid,
              avatar: action.avatar
             })
    default:
      return state
  }
}

export default authReducer