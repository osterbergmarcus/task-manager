import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'

class Feedback extends Component {
  render(){
    return (
      <div className="row">
        <div className="card-panel teal lighten-2 col s4">
          <h4>{this.props.message}</h4>
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