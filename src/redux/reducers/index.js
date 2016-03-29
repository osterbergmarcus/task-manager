import { combineReducers } from 'redux'
import taskReducer         from './taskReducer'
import feedbackReducer     from './feedbackReducer'
import authReducer         from './authReducer'

//combine reducers.. Map state propertis to individual reducers
const rootReducer = combineReducers({
  tasks: taskReducer,
  userfeedback: feedbackReducer,
  auth: authReducer
})

export default rootReducer