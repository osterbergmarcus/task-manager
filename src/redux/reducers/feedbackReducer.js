import { 
  SERVER_REQUEST, 
  SERVER_SUBMIT,
  SERVER_RESPONSE,
  DISPLAY_MESSAGE 
} from '../constants'
import initialState from '../initialState'

//Define export reducer, slicing out user property from state.
const feedbackReducer = (state = initialState.userfeedback, action) => {
  switch(action.type) {
    case SERVER_REQUEST:
      if (action.request) {
        return Object.assign({}, state, { loading: true })
      } else {
        return Object.assign({}, state, { loading: false })
      }
    case SERVER_SUBMIT:
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
    case DISPLAY_MESSAGE:
      return Object.assign({}, state, { message: action.message })
    default:
      return state
  }
}

export default feedbackReducer