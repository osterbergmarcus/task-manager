import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions           from '../redux/actions/userActions'
import Featured               from '../components/Featured'

//Making state avaivable as props
const mapStateToProps = (state) => {
  return {
    loading: state.userfeedback.loading,
    tasks: state.tasks.data,
    editing: state.tasks.editing
  }
}

//Wrapping action creators into the dispatcher and making actions avaivable as props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks:   bindActionCreators(actions.fetchTasks, dispatch),
    updateTasks:  bindActionCreators(actions.updateTasks, dispatch),
    removeTask:   bindActionCreators(actions.removeTask, dispatch),
    editTask:     bindActionCreators(actions.editTask, dispatch)
  }
}

//Injecting state and dispatch to props on component and connects it to redux
export default connect(mapStateToProps, mapDispatchToProps)(Featured)