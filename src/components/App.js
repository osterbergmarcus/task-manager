import React    from 'react'
import Nav      from '../components/Nav'
import FeedBack from '../components/Feedback'

//Rendering Navbar and children containers of /route
const App = ({ auth, children, message, loading, login, logout }) => {
    return (
      <div>
        <Nav auth={auth} login={login} logout={logout} loading={loading} />
        <FeedBack message={message} username={auth.username} />
          {children}
      </div>
    )
}

export default App

//proptypes
App.propTypes = {
    auth: React.PropTypes.object,
    children: React.PropTypes.object,
    message: React.PropTypes.string,
    loading: React.PropTypes.bool,
    login:  React.PropTypes.func,
    logout: React.PropTypes.func
}