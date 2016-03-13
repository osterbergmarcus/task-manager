import React          from 'react'
import { render }     from 'react-dom'
import App            from '../components/App'
import configureStore from '../redux/store'
import { Provider }   from 'react-redux'


let initialState = {
  tasks: []
}

//set up store
let store = configureStore(initialState)

//render the main component and mount to the root DOM elements
//Subscribe and make store available to all nested components using Provider
render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('app')
)