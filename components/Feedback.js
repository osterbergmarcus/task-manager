import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'

class Feedback extends Component {
  render(){
    return (
      <div className="row">
        <div className="col s4">
          <blockquote>
            {this.props.message}
          </blockquote>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    message: state.userfeedback.message
  }
}

export default connect(mapStateToProps)(Feedback)