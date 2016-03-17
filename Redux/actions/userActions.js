import Firebase                                         from 'firebase'
import { ADD_TASK, TOGGLE_TASK, FETCH_TASKS, FIREBASE } from '../constants'
const tasksRef = new Firebase(FIREBASE).child('tasks/data')

//Define and export action creators
export function addTask(text, priority){
    return (dispatch) => {
      dispatch({type: 'AWAIT_NEW_TASK'})
      
      tasksRef.push({text, priority}, (error) => {
        dispatch({type: 'RECEIVE_NEW_TASK_RESPONSE'})
         if (error){
          dispatch({type: 'DISPLAY_ERROR', message: "Submission failed! " + error})
         } else {
          dispatch({type: 'DISPLAY_MESSAGE', message: "Submission successfully saved!"})
         }
      })
    }
}

export function toggleTask(id, priority){
    if(priority === 'Low') {
    return {
      type: TOGGLE_TASK,
      id: id,
      priority: 'High'
    }
   } else {
    return {
     type: TOGGLE_TASK,
     id: id,
     priority: 'Low'
    }
   }  
}

//server request
export function fetchTasks(fireBaseRef) {
  return (dispatch) => {
    dispatch({type: 'FETCH_TASKS', fetching: true})
    
    fireBaseRef.once('value', (snapshot) => {
      const tasks = snapshot.val()
      console.log(tasks)
      dispatch({type: 'FETCH_TASKS', fetching: false})
    })
  }
}

export function updateTasks(fireBaseRef) {
  return ({type: 'UPDATE_TASKS', text: fireBaseRef})
}