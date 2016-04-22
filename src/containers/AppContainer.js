import React, { PropTypes }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginUser, logoutUser } from '../redux/modules/auth'
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
** mapStateToProps, mapDispatchToProps
*/ 
export default connect(
  (state) => ({
    auth: state.auth,
    message: state.feedback.message,
    loading: state.feedback.loading
  }),
  (dispatch) => ({
    login: bindActionCreators(loginUser, dispatch),
    logout: bindActionCreators(logoutUser, dispatch)
  })
)(App)