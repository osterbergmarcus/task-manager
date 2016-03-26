import React, { Component }       from 'react'
import { connect }                from 'react-redux'
import { bindActionCreators }     from 'redux'
import { loginUser, logoutUser }  from '../redux/actions/authActions'
import Auth                       from '../components/Auth'

//Making state avaivable as props
const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    uid: state.auth.uid
  }
}

//Wrapping action creators into the dispatcher and making actions avaivable as props
const mapDispatchToProps = (dispatch) => {
  return {
    login: bindActionCreators(loginUser, dispatch),
    logout: bindActionCreators(logoutUser, dispatch)
  }
}

//Injecting state and dispatch to props on component and connects it to redux
export default connect(mapStateToProps, mapDispatchToProps)(Auth)