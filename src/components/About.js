import React from 'react'

const About = () => {
  return (
    <div className="container">
      <div className="card-panel">
        <div className="row">
          <div className="col l6 s12">
            <h5>Hi,</h5>
            <p>This web application was made to learn and demonstrate the usage of React + Redux.</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5>You find me here</h5>
            <ul>
              <li><a className="grey-text text-lighten-1" href="http://marcusosterberg.com/">Blog</a></li>
              <li><a className="grey-text text-lighten-1" href="http://twitter.com/osterbergmarcus">Twitter</a></li>
              <li><a className="grey-text text-lighten-1" href="http://github.com/osterbergmarcus">Github</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container center">
          2016 Created by Marcus Osterberg
        </div>
      </div>
    </div>
  )
}

export default About