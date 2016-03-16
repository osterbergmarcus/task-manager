import { ADD_TASK, TOGGLE_TASK } from '../constants'
//Define and export action creators
export function addTask(text, priority){
    return {
      type: ADD_TASK,
      text: text,
      priority: priority
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

export function fetchTasks(fireBaseRef) {
  return (dispatch) => {
    dispatch({type: 'FETCH_TASKS', fetching: true})
    
    fireBaseRef.once('value', (snapshot) => {
      const tasks = snapshot.val()
      console.log(tasks)
      dispatch({type: 'FETCH_TASKS', tasks: tasks, fetching: false})
    })
  }
}