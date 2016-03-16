import React                                      from 'react'
import { render }                                 from 'react-dom'
import configureStore                             from '../redux/store'
import { Provider }                               from 'react-redux'
import initialState                               from '../redux/initialState'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App                                        from '../containers/App'
import Featured                                   from '../containers/Featured'
import AddTasks                                   from '../containers/AddTasks'
import Firebase                                   from 'firebase'

//create a root reference to firebase
const fireBaseRef = new Firebase('https://bayoga.firebaseio.com/')

//listen to values from firebase collection
const classes = fireBaseRef.child('classes/test')

classes.on('value', (snapshot) => {
  console.log(snapshot.val())
})

//set up store
let store = configureStore(initialState)

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