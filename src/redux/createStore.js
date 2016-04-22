import { applyMiddleware, compose, createStore } from 'redux'
import logger                                    from 'redux-logger'
import thunk                                     from 'redux-thunk'
import rootReducer                               from './rootReducer'
import initialState                              from './initialState'

// Configure logger
const loggerMiddleware = logger({
  level: 'info',
  collapsed: true,
})

// Configure middleWare with thunk, logger and time travel debugger tool for chrome
const finalCreateStore = compose(
  applyMiddleware(thunk, loggerMiddleware),
   window.devToolsExtension ? window.devToolsExtension() : f => f
)

// Create store
const store = createStore(rootReducer, initialState, finalCreateStore)

export default store