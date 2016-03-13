import { combineReducers } from 'redux'
import taskReducer         from './taskReducer'
import countReducer         from './countReducer'

//combine reducers.. Map state propertis to individual reducers
const rootReducer = combineReducers({
  tasks: taskReducer,
  count: countReducer
})

export default rootReducer