import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions }            from '../redux/actions/userActions'
import Counter                from '../components/Counter'
import TaskList               from '../components/TaskList'


class Featured extends Component {
  render() {
    return (
      <div>
        <div>Not signed in</div>
        <Counter tasks={this.props.tasks}/>
        <TaskList actions={this.props.actions} tasks={this.props.tasks}/>
      </div>
    )
  }
}

//Using connector to connect the component to the provided store
//connect() maps the state and dispatch action
//from the Provider to props for component
function mapStateToProps(state) {
  return state
}

//Wrapping actions with the dispatcher
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Featured)