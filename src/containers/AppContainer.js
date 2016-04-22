import React, { PropTypes }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import AuthActions            from '../redux/actions/AuthActions'
import { Nav, FeedBack }      from '../components'

//  Returning Navbar and route children
const App = ({ auth, children, message, loading, login, logout }) => {
    return (
      <div>
        <Nav
          uid={auth.uid}
          login={login}
          logout={logout}
          loading={loading}
        />
        <FeedBack
          message={message}
          username={auth.username}
        />
        {children}
      </div>
    )
}

// Proptypes
App.propTypes = {
  auth: PropTypes.object,
  children: PropTypes.object,
  message: PropTypes.string,
  loading: PropTypes.bool,
  login:  PropTypes.func,
  logout: PropTypes.func
}

/* Exporting and connecting component
** to state and dispatcher
*/ 
export default connect(
  (state) => ({
    auth: state.auth,
    message: state.userfeedback.message,
    loading: state.userfeedback.loading
  }),
  (dispatch) => ({
    login:  bindActionCreators(AuthActions.loginUser, dispatch),
    logout: bindActionCreators(AuthActions.logoutUser, dispatch)
  })  
)(App)