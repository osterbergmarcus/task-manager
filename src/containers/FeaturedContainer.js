import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import TaskActions            from '../redux/actions/TaskActions'
import Featured               from '../components/Featured'

//Making state avaivable as props
function mapStateToProps(state) {
  return {
    loading: state.userfeedback.loading,
    tasks: state.tasks.data,
  }
}

//Wrapping action creators into the dispatcher and making actions avaivable as props
function mapDispatchToProps(dispatch) {
  return {
    fetchTasks:   bindActionCreators(TaskActions.fetchTasks, dispatch),
    syncTasks:    bindActionCreators(TaskActions.syncTasks, dispatch),
    removeTask:   bindActionCreators(TaskActions.removeTask, dispatch),
    updateTask:   bindActionCreators(TaskActions.updateTask, dispatch)
  }
}

//Injecting state and dispatch to props on component and connects it to redux
export default connect(mapStateToProps, mapDispatchToProps)(Featured)