import {
  AWAIT_NEW_TASK,
  RECEIVE_NEW_TASK_RESPONSE,
  UPDATE_TASK, 
  SYNC_TASKS
} from '../constants'
import initialState from '../initialState'

//Define export reducer, slicing out tasks property from state.
const taskReducer = (state = initialState.tasks, action) => {
  switch(action.type) {
    case AWAIT_NEW_TASK:
			return Object.assign({}, state, { submittingnew: true })
    case RECEIVE_NEW_TASK_RESPONSE:
      return Object.assign({}, state, { submittingnew: false })
    case SYNC_TASKS:
      return Object.assign({}, state, { data: action.data })
    case 'EDITING_TASK':
      return Object.assign({}, state, { editing: true })
    case 'TASK_TO_EDIT':
        return state
    case 'TASK_EDITED':
      return Object.assign({}, state, { editing: false })
    default:
      return state
  }
}

export default taskReducer