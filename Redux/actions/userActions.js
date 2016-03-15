import { ADD_TASK, TOGGLE_TASK } from '../constants'

//Define and export action creators
export const actions = {
  addTask: (text, priority) => {
    return {
      type: ADD_TASK,
      text: text,
      priority: priority
   }
  },

  toggleTask: (id, priority) => {
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
}