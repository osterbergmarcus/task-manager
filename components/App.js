import React, { Component }   from 'react'
import TaskInput              from './TaskInput'
import TaskList               from './TaskList'
import Counter                from './Counter'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions }            from '../redux/actions'


class App extends Component {
  render() {
    return (
      <div>
        <Counter tasks={this.props.tasks}/>
        <TaskInput actions={this.props.actions}/>
        <TaskList actions={this.props.actions} tasks={this.props.tasks}/>
      </div>
    )
  }
}

//Using connector to connect the app component to the provided store
//connect() maps the state and dispatch action
//from the Provider to props for App component
function mapStateToProps(state) {
  return state
}

//Wrapping actions with the dispatcher
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)