import React, { Component } from 'react'
import Auth                 from './Auth'
import { Link }             from 'react-router'

class Nav extends Component {
  render(){
    return (
     <div>  
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">Logo</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <Auth />
            <li><Link to="/addtasks">Add tasks</Link></li>
            <li><Link to="/featured">Featured</Link></li>
          </ul>
        </div>
      </nav>
    </div>
    )
  }
}

export default Nav