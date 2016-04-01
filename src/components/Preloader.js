import React, { PropTypes } from 'react'

const Preloader = ({ loading }) => {
  if (loading === false) {
    return (
      <div>
        <a href="#" className="brand-logo center"><i className="large material-icons">loop</i></a>
      </div>
    )
  } else {
    return (
      <div className="center">
      <div className="preloader-wrapper small active">
        <div className="spinner-layer spinner-blue lighten-1-only">
          <div className="circle-clipper left">
            <div className="circle">
            </div>
          </div>
          <div className="gap-patch">
            <div className="circle">
            </div>
          </div>
          <div className="circle-clipper right">
            <div className="circle">
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
export default Preloader

//proptypes
Preloader.propTypes = {
    loading: PropTypes.bool
}