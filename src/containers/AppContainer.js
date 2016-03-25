import React, { Component } from 'react'
import { connect }          from 'react-redux'
import App                  from '../components/App'

//Wrapping action creators into the dispatcher and making actions avaivable as props
const mapStateToProps = (state) => {
  return {
    message: state.userfeedback.message
  }
}

//Injecting state and dispatch to props on component and connects it to redux
export default connect(mapStateToProps, null)(App)