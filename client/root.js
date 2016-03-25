import React                                      from 'react'
import { render }                                 from 'react-dom'
import { Provider }                               from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Firebase                                   from 'firebase'
import initialState                               from '../src/redux/initialState'
import store                                      from '../src/redux/store/store'
import { App, Featured, AddTasks }                from '../src/containers'

//render the main component and mount to the root DOM elements
//Subscribe and make store available to all nested components using Provider
//Making all childrens of the app component
render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
       <IndexRoute component={Featured}></IndexRoute>
        <Route path="/featured" component={Featured}></Route>
        <Route path="/addtasks" component={AddTasks}></Route>
       </Route>
    </Router>
  </Provider>,
  document.getElementById('react-mount')
)