import React, { Component }   from 'react'
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

export default App