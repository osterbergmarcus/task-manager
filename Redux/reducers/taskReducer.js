import { ADD_TASK, TOGGLE_TASK } from '../constants'


//Helper function
function getId(tasks) {
  return tasks.reduce((maxId, task) => {
    return Math.max(task.id, maxId)
  }, -1) + 1
}

//Define export reducer, slicing out tasks property from state.
const taskReducer = (tasks = [], action) => {
  switch(action.type) {
    case ADD_TASK:
      return  [{
        text: action.text,
        priority: action.priority,
        id: getId(tasks)
        }, ...tasks]
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