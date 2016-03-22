import React, { Component }   from 'react'
import TaskInput              from '../components/TaskInput'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions          from '../redux/actions/userActions'


class AddTasks extends Component {
  render() {
    return (
      <div>
        <div>Add Tasks</div>
        <TaskInput addTask={this.props.addTask}/>
      </div>
    )
  }
}

//Using connector to connect the component to the provided store
//connect() maps the state and dispatch action
//passing down from the provider as props to the child components 
function mapStateToProps(state) {
   return {
    message: state.userfeedback.message
  }
}

//Wrapping actions with the dispatcher
function mapDispatchToProps(dispatch){
  return {
    addTask: bindActionCreators(actions.addTask, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTasks)