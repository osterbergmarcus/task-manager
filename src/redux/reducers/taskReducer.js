import { SYNC_TASKS } from '../constants'
import initialState   from '../initialState'

//Define export reducer, slicing out tasks property from state.
const taskReducer = (state = initialState.tasks, action) => {
  switch(action.type) {
    case SYNC_TASKS:
      return Object.assign({}, state, { data: action.data })
    default:
      return state
  }
}

export default taskReducer