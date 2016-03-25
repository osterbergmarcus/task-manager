import React                  from 'react'
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

export default Feedback