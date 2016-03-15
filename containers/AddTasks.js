import React, { Component }   from 'react'
import TaskInput              from '../components/TaskInput'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions }            from '../redux/actions/userActions'


class AddTasks extends Component {
  render() {
    return (
      <div>
        <div>Add Tasks</div>
        <TaskInput actions={this.props.actions}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddTasks)