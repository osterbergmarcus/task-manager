import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'

const Feedback = ({ message }) => {
    return (
      <div className="row">
        <div className="col s4">
          <blockquote>
            {message}
          </blockquote>
        </div>
      </div>
    )
}

function mapStateToProps(state) {
  return {
    message: state.userfeedback.message
  }
}

export default connect(mapStateToProps)(Feedback)