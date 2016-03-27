import React  from 'react'

const Preloader = ({ loading }) => {
  if(loading === false){
    return (
      <div>
        <a href="#" className="brand-logo center">TaskMan</a>
      </div>
    )
  } else {
    return (
      <div>
      <div className="preloader-wrapper small active center-align">
        <div className="spinner-layer spinner-blue-only">
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
    loading: React.PropTypes.bool
}