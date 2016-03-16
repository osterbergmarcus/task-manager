import React                                      from 'react'
import { render }                                 from 'react-dom'
import { Provider }                               from 'react-redux'
import initialState                               from '../redux/initialState'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App                                        from '../containers/App'
import Featured                                   from '../containers/Featured'
import AddTasks                                   from '../containers/AddTasks'
import Firebase                                   from 'firebase'
import store                                      from '../redux/store'

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
  document.getElementById('app')
)