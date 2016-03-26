import React                              from 'react'
import { App, Featured, AddTasks, Auth }  from '../src/containers'
import { Route, IndexRoute}               from 'react-router'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Featured}></IndexRoute>
    <Route path="/addtasks" component={AddTasks}></Route>
    <Route path="/auth"     component={Auth}></Route>
    <Route path="/featured" component={Featured}></Route>
  </Route>
)