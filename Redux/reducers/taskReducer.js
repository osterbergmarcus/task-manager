import { ADD_TASK, TOGGLE_TASK } from '../constants'


//Helper function
function getId(tasks) {
  return tasks.reduce((maxId, task) => {
    return Math.max(task.id, maxId)
  }, -1) + 1
}

//Define export reducer, slicing out tasks property from state.
const taskReducer = (tasks = {}, action) => {
  switch(action.type) {
    case 'AWAIT_NEW_TASK':
			return Object.assign({}, tasks, {submittingnew: true})
      
    case 'RECEIVE_NEW_TASK_RESPONSE':
      return Object.assign({}, tasks, {submittingnew: false})
      
    case TOGGLE_TASK:
      return tasks.map(task => {
        return task.id === action.id ?
          Object.assign({}, task, {priority: action.priority}) : task
      })
      
    default:
      return tasks;
  }
}

export default taskReducer