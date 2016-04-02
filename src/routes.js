import React                from 'react'
import { Route, IndexRoute} from 'react-router'
import {
  App, 
  Featured, 
  AddTasks, 
  Auth, 
  About 
} from '../src/containers'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Featured}></IndexRoute>
    <Route path="/addtasks" component={AddTasks}></Route>
    <Route path="/auth"     component={Auth}></Route>
    <Route path="/featured" component={Featured}></Route>
    <Route path="/about"    component={About}></Route>
  </Route>
)