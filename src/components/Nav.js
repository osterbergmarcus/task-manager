import React    from 'react'
import Auth     from './Auth'
import { Link } from 'react-router'
import Loading  from './Loading'

const Nav = ({ auth, loading, login, logout }) => {
  return (
   <div>  
    <nav>
      <div className="nav-wrapper">
       <Loading loading={loading} />
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="#"
              onClick={auth.uid === null ? () => login() : () => logout()}
              >{auth.uid === null ? 'Sign in' : 'Sign out'}
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