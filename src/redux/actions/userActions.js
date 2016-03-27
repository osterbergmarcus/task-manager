import Firebase from 'firebase'
import { 
  ADD_TASK,
  SERVER_REQUEST, 
  FIREBASE,
  AWAIT_NEW_TASK,
  RECEIVE_NEW_TASK_RESPONSE,
  DISPLAY_ERROR,
  DISPLAY_MESSAGE,
  UPDATE_TASKS,
  REMOVE_TASK
 } from '../constants'
  
const tasksRef = new Firebase(FIREBASE).child('tasks/data')

//Define and export action creators
export function addTask(text, priority, avatar, username){
  return (dispatch) => {
    if(!text){
      dispatch({type: DISPLAY_ERROR, message: "Input text missing"})
    } else {
      dispatch({type: AWAIT_NEW_TASK})
    
      tasksRef.push({text, priority, avatar, username}, (error) => {
        dispatch({type: RECEIVE_NEW_TASK_RESPONSE})
          if (error){
            dispatch({type: DISPLAY_ERROR, message: "Failed to submit task " + error})
          } else {
            dispatch({type: DISPLAY_MESSAGE, message: "Task succesfully saved"})
          }
      })
    }
  }
}

export function removeTask(fireBaseRef){
  return (dispatch) => {
    let tempTaskRef = new Firebase(FIREBASE).child('tasks/data/' + fireBaseRef)
    
    tempTaskRef.remove((error) => {
      if(error) {
        dispatch({type: DISPLAY_ERROR, message: "Failed to delete task " + error})
      } else {
        dispatch({type: DISPLAY_MESSAGE, message: "Task succesfully deleted"})
      }
    })
  }
}


//server request
export function fetchTasks(fireBaseRef) {
  return (dispatch) => {
    dispatch({type: SERVER_REQUEST, fetching: true})
    
    fireBaseRef.once('value', (snapshot) => {
      const tasks = snapshot.val()
      dispatch({type: SERVER_REQUEST, fetching: false})
    })
  }
}

export function updateTasks(fireBaseRef) {
  let tasks = []
  fireBaseRef.forEach((child) => {
    tasks.push({
    text: child.val().text,
    priority: child.val().priority,
    id: child.key(),
    username: child.val().username,
    avatar: child.val().avatar
  })
  })
  return {
   type: UPDATE_TASKS,
   data: tasks
  }
}