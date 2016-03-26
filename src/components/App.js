import React    from 'react'
import Nav      from '../components/Nav'
import FeedBack from '../components/Feedback'

//Rendering Navbar and children containers of /route
const App = ({ children, message, auth }) => {
    return (
      <div>
        <Nav auth={auth} />
        <FeedBack message={message} username={auth.username} />
          {children}
      </div>
    )
}

export default App