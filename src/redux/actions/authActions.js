import Firebase from 'firebase'
import { FIREBASE } from '../constants'

const authRef = new Firebase(FIREBASE)

//Define and export action creators
export function loginUser(text, priority){
  return (dispatch) => {
    dispatch({type: 'LOGIN'})
        dispatch({type: 'DISPLAY_MESSAGE', message: "Authentication requested"})
    
    authRef.authWithOAuthPopup("google", function(error, authData) {
      if (error) {
        dispatch({type: 'DISPLAY_ERROR', message: "Failed to login"})
        dispatch({type: 'LOGOUT'})
      } else {
        dispatch({type: 'DISPLAY_MESSAGE', message: "Logged in"})
        console.log(authData)
        dispatch({type: 'LOGGED_IN_USER', username: authData.google.displayName, uid: authData.uid})
      }
    })
  }
}

export function logoutUser(text, priority){
  return (dispatch) => {
    dispatch({type: 'LOGOUT'})
    dispatch({type: 'DISPLAY_MESSAGE', message: "Logged out"})
    authRef.unauth()
  }
}