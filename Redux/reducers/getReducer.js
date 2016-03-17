import { FETCH_TASKS } from '../constants'

//Define export reducer, slicing out user property from state.
const getReducer = (userfeedback = {loading: false, message: ''}, action) => {
  switch(action.type){
    case FETCH_TASKS:
      if(action.fetching){
        return Object.assign({}, userfeedback, {loading: true})
      } else {
        return Object.assign({}, userfeedback, {loading: false})
      }
      
    case 'DISPLAY_ERROR':
      return Object.assign({}, userfeedback, {message: action.message})
      
    case 'DISPLAY_MESSAGE':
      return Object.assign({}, userfeedback, {message: action.message})
      
    default:
      return userfeedback;
  }
}

export default getReducer