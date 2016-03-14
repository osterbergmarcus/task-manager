import { applyMiddleware, compose, createStore } from 'redux'
import logger                                    from 'redux-logger'
import rootReducer                               from './reducers'
import thunk                                     from 'redux-thunk'

//Configure middleware with logger and timetraveler debbuger tool for chrome
let finalCreateStore = compose(
  applyMiddleware(logger(), thunk),
   window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

//configure and creating store
export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)  
}