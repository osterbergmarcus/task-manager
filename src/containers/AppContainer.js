import React, { Component }      from 'react'
import { connect }               from 'react-redux'
import { bindActionCreators }    from 'redux'
import AuthActions               from '../redux/actions/AuthActions'
import App                       from '../components/App'

//Making state avaivable as props
function mapStateToProps(state) {
  return {
    auth: state.auth,
    message: state.userfeedback.message,
    loading: state.userfeedback.loading
  }
}

//Wrapping action creators into the dispatcher and making actions avaivable as props
function mapDispatchToProps(dispatch) {
  return {
    login:  bindActionCreators(AuthActions.loginUser, dispatch),
    logout: bindActionCreators(AuthActions.logoutUser, dispatch)
  }
}

//Injecting state and dispatch to props on component and connects it to redux
export default connect(mapStateToProps, mapDispatchToProps)(App)