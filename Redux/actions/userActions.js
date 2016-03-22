import Firebase                                         from 'firebase'
import { 
  ADD_TASK,
  TOGGLE_TASK,
  FETCH_TASKS, 
  FIREBASE,
  AWAIT_NEW_TASK,
  RECEIVE_NEW_TASK_RESPONSE,
  DISPLAY_ERROR,
  DISPLAY_MESSAGE,
  UPDATE_TASKS 
  } from '../constants'
  
const tasksRef = new Firebase(FIREBASE).child('tasks/data')

//Define and export action creators
export function addTask(text, priority){
    return (dispatch) => {
      dispatch({type: AWAIT_NEW_TASK})
      
      tasksRef.push({text, priority}, (error) => {
        dispatch({type: RECEIVE_NEW_TASK_RESPONSE})
         if (error){
          dispatch({type: DISPLAY_ERROR, message: "Submission failed! " + error})
         } else {
          dispatch({type: DISPLAY_MESSAGE, message: "Submission successfully saved!"})
         }
      })
    }
}

export function removeTask(fireBaseRef){
  return (dispatch) => {
    dispatch({type: 'REMOVE_TASK', removing: true})
    let tempTaskRef = new Firebase(FIREBASE).child('tasks/data/' + fireBaseRef)
    
    tempTaskRef.remove((error) => {
      if(error) {
        dispatch({DISPLAY_ERROR, message: "Failed to delete task"})
      } else {
        dispatch({type: DISPLAY_MESSAGE, message: "Task deleted"})
      }
    })
  }
}


//server request
export function fetchTasks(fireBaseRef) {
  return (dispatch) => {
    dispatch({type: FETCH_TASKS, fetching: true})
    
    fireBaseRef.once('value', (snapshot) => {
      const tasks = snapshot.val()
      dispatch({type: FETCH_TASKS, fetching: false})
    })
  }
}

export function updateTasks(fireBaseRef) {
  let tasks = []
  fireBaseRef.forEach((child) => {
    tasks.push({
    text: child.val().text,
    priority: child.val().priority,
    id: child.key()
  })
  })
  return {
   type: UPDATE_TASKS,
   data: tasks
  }
}