import { ADD_TASK, TOGGLE_TASK } from '../constants'


//Helper function

//Define export reducer, slicing out tasks property from state.
const taskReducer = (tasks = {}, action) => {
  switch(action.type) {
    case 'AWAIT_NEW_TASK':
			return Object.assign({}, tasks, {submittingnew: true})
      
    case 'RECEIVE_NEW_TASK_RESPONSE':
      return Object.assign({}, tasks, {submittingnew: false})
    case 'UPDATE_TASKS':
      return Object.assign({}, tasks, {data: action.data})
 
    default:
      return tasks;
  }
}

export default taskReducer