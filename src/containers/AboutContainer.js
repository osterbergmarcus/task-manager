import React                  from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import About                  from '../components/About'

//Making state avaivable as props
function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

//Injecting state and dispatch to props on component and connects it to redux
export default connect(mapStateToProps, null)(About)
