import initialState from '../initialState'

// Constants
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_LOGGED_IN = 'USER_LOGGED_IN'
const NOTIFICATION = 'NOTIFICATION'
const FIREBASE = 'https://bayoga.firebaseio.com/'
const SERVER_REQUEST = 'SERVER_REQUEST'
const SERVER_RESPONSE = 'SERVER_RESPONSE'

// Action creators
const rootRef = new Firebase(FIREBASE)

export function authCheck() {
  return (dispatch) => {
    dispatch({ type: NOTIFICATION, message: 'Checking for current authentication' })
    rootRef.onAuth((authData) => {
      if (authData) {
        dispatch({
          type: USER_LOGGED_IN,
          status: 'USER LOGGED IN',
          username: authData.google.displayName,
          uid: authData.uid,
          avatar: authData.google.profileImageURL
        })
        dispatch({ type: NOTIFICATION, message: 'Logged in' })
      } else {
        dispatch({ type: NOTIFICATION, message: 'Sign in to use application' })  
      }
    })
  }
}
  
export function loginUser(text, priority) {
  return (dispatch) => {
    dispatch({ type: LOGIN, status: 'AWAITING AUTH' })
    dispatch({ type: NOTIFICATION, message: 'Authentication requested' })
    dispatch({ type: SERVER_REQUEST, request: true })
    rootRef.authWithOAuthPopup('google', (error, authData) => {
      if (error) {
        dispatch({ type: NOTIFICATION, message: 'Failed to login' })
        dispatch({ type: SERVER_RESPONSE, request: false })
        dispatch({ type: LOGOUT })
      } else {
        dispatch({ type: SERVER_RESPONSE, request: false })
        dispatch({
          type: USER_LOGGED_IN,
          status: 'USER LOGGED IN',
          username: authData.google.displayName,
          uid: authData.uid,
          avatar: authData.google.profileImageURL
        })
        dispatch({ type: NOTIFICATION, message: 'Logged in' })
      }
    })
  }
}

export function logoutUser(text, priority) {
  return (dispatch) => {
    dispatch({ type: LOGOUT })
    dispatch({ type: NOTIFICATION, message: 'Logged out' })
    rootRef.unauth()
  }
}

// Reducer
export default function reducer(state = initialState.auth, action) {
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