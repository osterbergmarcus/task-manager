import React, { Component }   from 'react'
import TaskInput              from '../components/TaskInput'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions          from '../redux/actions/userActions'


const AddTasks = ({ addTask }) => {
  return (
    <div>
      <div>Add Tasks</div>
      <TaskInput addTask={addTask}/>
    </div>
  )
}

//passing down state from the provider as props to the child components 
function mapStateToProps(state) {
   return {
    state
  }
}

//Wrapping actions with the dispatcher
function mapDispatchToProps(dispatch){
  return {
    addTask: bindActionCreators(actions.addTask, dispatch)
  }
}

//Using connector to connect the component to the provided store
//maps the state and dispatch actions
export default connect(mapStateToProps, mapDispatchToProps)(AddTasks)