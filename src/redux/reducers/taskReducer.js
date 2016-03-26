import { AWAIT_NEW_TASK, RECEIVE_NEW_TASK_RESPONSE, UPDATE_TASKS } from '../constants'
import initialState                                                from '../initialState'
//Define export reducer, slicing out tasks property from state.
const taskReducer = (state = initialState.tasks.data, action) => {
  switch(action.type) {
    case AWAIT_NEW_TASK:
			return Object.assign({}, state, {submittingnew: true})
    case RECEIVE_NEW_TASK_RESPONSE:
      return Object.assign({}, state, {submittingnew: false})
    case UPDATE_TASKS:
      return Object.assign({}, state, {data: action.data})
    default:
      return state;
  }
}

export default taskReducer