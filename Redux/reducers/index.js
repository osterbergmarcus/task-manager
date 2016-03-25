import { combineReducers } from 'redux'
import taskReducer         from './taskReducer'
import getReducer          from './getReducer'
import authReducer         from './authReducer'

//combine reducers.. Map state propertis to individual reducers
const rootReducer = combineReducers({
  tasks: taskReducer,
  userfeedback: getReducer,
  auth: authReducer
})

export default rootReducer