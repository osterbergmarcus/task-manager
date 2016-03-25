import React    from 'react'
import Nav      from '../components/Nav'
import FeedBack from '../components/Feedback'

//Rendering Navbar and children containers of /route
const App = ({ children, message }) => {
    return (
      <div>
        <Nav />
        <FeedBack message={message} />
          {children}
      </div>
    )
}

export default App