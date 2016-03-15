import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions }            from '../redux/actions/userActions'
import Nav                    from '../components/Nav'

//Rendering Navbar and children containers of /route
class App extends Component {
  render() {
    return (
      <div>
        <Nav />
          {this.props.children}
      </div>
    )
  }
}

//Using connector to connect the app component to the provided store
//connect() maps the state and dispatch action
//from the Provider to props for App component
function mapStateToProps(state) {
  return state
}

//Wrapping actions with the dispatcher
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)