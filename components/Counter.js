import React, { Component }         from 'react'

class Counter extends Component {
  render(){
    return (
      <div>
      <h2>Total tasks: {this.props.tasks.length}</h2>
      <h3>Click to toggle task priority</h3>
      </div>
    )
  }
}

export default Counter