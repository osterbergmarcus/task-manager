import React, { Component }   from 'react'
import Nav                    from '../components/Nav'
import FeedBack               from '../components/Feedback'

//Rendering Navbar and children containers of /route
class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <FeedBack />
          {this.props.children}
      </div>
    )
  }
}

export default App