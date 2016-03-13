//Define and export actions
export const ADD_TASK = 'ADD_TASK'
export const TOGGLE_TASK = 'TOGGLE_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const INCREMENT_COUNT = 'INCREMENT_COUNT'


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