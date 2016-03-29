import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import TaskActions            from '../redux/actions/TaskActions'
import AddTasks               from '../components/AddTasks'

//Making state avaivable as props
function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

//Wrapping action creators into the dispatcher and making actions avaivable as props
function mapDispatchToProps(dispatch) {
  return {
    addTask: bindActionCreators(TaskActions.addTask, dispatch)
  }
}

//Injecting state and dispatch to props on component and connects it to redux
export default connect(mapStateToProps, mapDispatchToProps)(AddTasks)
