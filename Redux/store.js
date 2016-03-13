import { applyMiddleware, compose, createStore } from 'redux'
import logger                                    from 'redux-logger'
import rootReducer                               from './reducers'

//Middleware
let appCreateStore = compose(
  applyMiddleware(logger())
)(createStore)

//configure and creating store
export default function configureStore(initialState) {
  return appCreateStore(rootReducer, initialState)  
}