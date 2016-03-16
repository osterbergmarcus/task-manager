// import { INCREMENT_COUNT } from '../actions'

//Define export reducer, slicing out user property from state.
const getReducer = (loading = false, action) => {
  switch(action.type){
    case 'FETCH_TASKS':
      if(action.fetching){
        return loading = true
      } else {
        return loading = false
      }
    default:
      return loading;
  }
}

export default getReducer