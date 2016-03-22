import React, { Component } from 'react'

class TaskItem extends Component {
  _removeTask(e){
    this.props.removeTask(this.props.task.id, this.props.task.priority)
  }
  
  render(){
    return (
      <li onClick={this._removeTask.bind(this)}>{this.props.task.text}</li>
    )
  }
}

export default TaskItem