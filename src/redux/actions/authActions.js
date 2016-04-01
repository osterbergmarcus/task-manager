import {
  LOGIN,
  LOGOUT,
  USER_LOGGED_IN,
  FIREBASE,
  SERVER_REQUEST,
  SERVER_RESPONSE,
  NOTIFICATION
} from '../constants'
const rootRef = new Firebase(FIREBASE)

//Define and export action creators
const AuthActions = {
  authCheck() {
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
  },
  
  loginUser(text, priority) {
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
  },

  logoutUser(text, priority)  {
    return (dispatch) => {
      dispatch({ type: LOGOUT })
      dispatch({ type: NOTIFICATION, message: 'Logged out' })
      rootRef.unauth()
    }
  }
}

export default AuthActions