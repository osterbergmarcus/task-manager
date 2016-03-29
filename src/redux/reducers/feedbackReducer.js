import { SERVER_REQUEST, DISPLAY_ERROR, DISPLAY_MESSAGE } from '../constants'
import initialState from '../initialState'

//Define export reducer, slicing out user property from state.
const feedbackReducer = (state = initialState.userfeedback, action) => {
  switch(action.type) {
    case SERVER_REQUEST:
      if (action.fetching) {
        return Object.assign({}, state, { loading: true })
      } else {
        return Object.assign({}, state, { loading: false })
      }
    case DISPLAY_ERROR:
      return Object.assign({}, state, { message: action.message })
    case DISPLAY_MESSAGE:
      return Object.assign({}, state, { message: action.message })
    default:
      return state
  }
}

export default feedbackReducer