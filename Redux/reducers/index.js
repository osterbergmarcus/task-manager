import { combineReducers } from 'redux'
import taskReducer         from './taskReducer'
import getReducer          from './getReducer'

//combine reducers.. Map state propertis to individual reducers
const rootReducer = combineReducers({
  tasks: taskReducer,
  loading: getReducer
})

export default rootReducer