import initialState from '../initialState'
import { addTask, removeTask, updateTasks, getTasks } from './tasks'
import { authCheck, loginUser, logoutUser } from './auth'

// Constants
const SERVER_REQUEST = 'SERVER_REQUEST'
const PUSH_DATA = 'PUSH_DATA'
const SERVER_RESPONSE = 'SERVER_RESPONSE'
const NOTIFICATION = 'NOTIFICATION'

// Reducer
export default function reducer(state = initialState.feedback, action) {
  switch(action.type) {
    case SERVER_REQUEST:
      if (action.request) {
        return Object.assign({}, state, { loading: true })
      } else {
        return Object.assign({}, state, { loading: false })
      }
    case PUSH_DATA:
      if (action.submit) {
        return Object.assign({}, state, { loading: true })
      } else {
        return Object.assign({}, state, { loading: false })
      }
    case SERVER_RESPONSE:
      if (action.request) {
        return Object.assign({}, state, { loading: true })
      } else {
        return Object.assign({}, state, { loading: false })
      }
    case NOTIFICATION:
      return Object.assign({}, state, { message: action.message })
    default:
      return state
  }
}