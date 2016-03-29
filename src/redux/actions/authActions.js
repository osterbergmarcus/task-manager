import {
  LOGIN,
  LOGOUT,
  USER_LOGGED_IN,
  FIREBASE,
  SERVER_REQUEST,
  SERVER_RESPONSE,
  SERVER_SUBMIT,
  DISPLAY_MESSAGE
} from '../constants'
const rootRef = new Firebase(FIREBASE)

//Define and export action creators
const AuthActions = {
  loginUser(text, priority) {
    return (dispatch) => {
      dispatch({ type: LOGIN, status: 'AWAITING AUTH' })
      dispatch({ type: DISPLAY_MESSAGE, message: 'Authentication requested' })
      dispatch({ type: SERVER_REQUEST, request: true })
      rootRef.authWithOAuthPopup('google', (error, authData) => {
        if (error) {
          dispatch({ type: DISPLAY_MESSAGE, message: 'Failed to login' })
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
          dispatch({ type: DISPLAY_MESSAGE, message: 'Logged in' })
        }
      })
    }
  },

  logoutUser(text, priority)  {
    return (dispatch) => {
      dispatch({ type: LOGOUT })
      dispatch({ type: DISPLAY_MESSAGE, message: 'Logged out' })
      rootRef.unauth()
    }
  }
}

export default AuthActions