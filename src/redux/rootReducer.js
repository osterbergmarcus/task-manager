import { combineReducers } from 'redux'
import { auth, feedback, tasks } from './modules'

const rootReducer = combineReducers({ auth, feedback, tasks })

export default rootReducer