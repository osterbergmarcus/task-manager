import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import Preloader            from './Preloader'

const Nav = ({ uid, loading, login, logout }) => {
  return (
   <div>  
    <nav>
      <div className="nav-wrapper grey darken-4">
       <Preloader loading={loading} />
        <ul id="nav-mobile" className="left">
          <li>
            <a href="#" onClick={uid === null ? () => login() : () => logout()}>
            {uid === null ? 'Sign in' : 'Sign out'}
            </a>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/addtasks">Add tasks</Link></li>
          <li><Link to="/featured">Featured</Link></li>
        </ul>
      </div>
    </nav>
   </div>
  )
}

export default Nav

//proptypes
Nav.propTypes = {
    uid: PropTypes.string,
    loading: PropTypes.bool,
    login: PropTypes.func,
    logout: PropTypes.func
}