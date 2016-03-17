import React, { Component } from 'react'
import TaskItem             from './TaskItem'

class TaskList extends Component {
  render() {
    return (
      <div>
      Task List
      </div>
     )
  }
}

export default TaskList

      // <ul className="high-priority">
      // {this.props.tasks.map(task => {
      //   if(task.priority === 'High') {
      //     return (<TaskItem key={task.id} task={task} toggleTask={this.props.toggleTask}/>)
      //   }
      // })}   
      // </ul>
      // <ul className="low-priority">
      // {this.props.tasks.map(task => {
      //   if(task.priority === 'Low') {
      //     return (<TaskItem key={task.id} task={task} toggleTask={this.props.toggleTask}/>)
      //   }
      // })}   
      // </ul>