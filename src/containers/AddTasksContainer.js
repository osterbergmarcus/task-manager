import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTask }            from '../redux/actions/userActions'
import AddTasks               from '../components/AddTasks'

//Wrapping action creators into the dispatcher and making actions avaivable as props
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: bindActionCreators(addTask, dispatch)
  }
}

//Injecting state and dispatch to props on component and connects it to redux
export default connect(null, mapDispatchToProps)(AddTasks)
