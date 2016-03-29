import React, { PropTypes }  from 'react'
import { Link }              from 'react-router'
import Preloader             from './Preloader'

const Nav = ({ auth, loading, login, logout }) => {
  return (
   <div>  
    <nav>
      <div className="nav-wrapper">
       <Preloader loading={loading} />
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="#" onClick={auth.uid === null ? () => login() : () => logout()}>
            {auth.uid === null ? 'Sign in' : 'Sign out'}
            </a>
          </li>
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
    auth: PropTypes.object,
    loading: PropTypes.bool,
    login: PropTypes.func,
    logout: PropTypes.func
}