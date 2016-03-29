import Firebase from 'firebase'
import { FIREBASE } from '../constants'

const authRef = new Firebase(FIREBASE)

//Define and export action creators
const AuthActions = {
  loginUser(text, priority) {
    return (dispatch) => {
      dispatch({type: 'LOGIN'})
          dispatch({type: 'DISPLAY_MESSAGE', message: 'Authentication requested'})
          dispatch({type: 'SERVER_REQUEST', fetching: true})
      
      authRef.authWithOAuthPopup("google", (error, authData) => {
        if (error) {
          dispatch({type: 'DISPLAY_ERROR', message: 'Failed to login'})
          dispatch({type: 'LOGOUT'})
          dispatch({type: 'SERVER_REQUEST', fetching: false})
        } else {
          dispatch({type: 'DISPLAY_MESSAGE', message: 'Logged in'})
          console.log(authData)
          dispatch({type: 'LOGGED_IN_USER',
                    username: authData.google.displayName,
                    uid: authData.uid,
                    avatar: authData.google.profileImageURL
                  })
          dispatch({type: 'SERVER_REQUEST', fetching: false})
        }
      })
    }
  },

  logoutUser(text, priority)  {
    return (dispatch) => {
      dispatch({type: 'LOGOUT'})
      dispatch({type: 'DISPLAY_MESSAGE', message: 'Logged out'})
      authRef.unauth()
    }
  }
}

export default AuthActions