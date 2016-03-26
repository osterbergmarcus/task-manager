import React    from 'react'
import Auth     from './Auth'
import { Link } from 'react-router'

const Nav = ({ auth }) => {
  return (
   <div>  
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">Logo</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><Link to="/auth">
          {auth.uid === null ? 'Sign in' : 'Sign out'}</Link></li>
          <li><Link to="/addtasks">Add tasks</Link></li>
          <li><Link to="/featured">Featured</Link></li>
        </ul>
      </div>
    </nav>
   </div>
  )
}

export default Nav