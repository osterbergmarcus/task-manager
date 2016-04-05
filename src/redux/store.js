import { applyMiddleware, compose, createStore } from 'redux'
import logger                                    from 'redux-logger'
import thunk                                     from 'redux-thunk'
import rootReducer                               from './reducers'
import initialState                              from './initialState'

//configure logger
const loggerMiddleware = logger({
  level: 'info',
  collapsed: true,
})

//configure middleWare with thunk, logger and time travel debugger tool for chrome
const finalCreateStore = compose(
  applyMiddleware(thunk, loggerMiddleware),
   window.devToolsExtension ? window.devToolsExtension() : f => f
)

//create store
const store = createStore(rootReducer, initialState, finalCreateStore)

export default store