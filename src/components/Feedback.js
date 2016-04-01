import React , { PropTypes } from 'react'

const Feedback = ({ message, username }) => {
    return (
      <div className="row">
        <div className="col s4">
          <blockquote className="grey lighten-3">
            <p><strong>{username}</strong></p>
            <p><italic>{message}</italic></p>
          </blockquote>
        </div>
      </div>
    )
}

export default Feedback

//proptypes
Feedback.propTypes = {
  message: PropTypes.string,
  username: PropTypes.string
}