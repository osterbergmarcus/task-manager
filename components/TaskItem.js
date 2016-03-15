import React, { Component } from 'react'

class TaskItem extends Component {
  _handleToggle(e){
    this.props.actions.toggleTask(this.props.task.id, this.props.task.priority)
  }
  
  render(){
    return (
      <li onClick={this._handleToggle.bind(this)}>{this.props.task.text}</li>
    )
  }
}

export default TaskItem