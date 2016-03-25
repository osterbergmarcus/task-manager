import React, { Component }   from 'react'
import Nav                    from '../components/Nav'
import FeedBack               from '../components/Feedback'

//Rendering Navbar and children containers of /route
const App = ({ children }) => {
    return (
      <div>
        <Nav />
        <FeedBack />
          {children}
      </div>
    )
}

export default App