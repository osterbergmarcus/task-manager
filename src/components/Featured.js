import React, { Component } from 'react'
import { FIREBASE }         from '../redux/constants'
import TaskList             from '../components/TaskList'
import Firebase             from 'firebase'

//firebase ref
const tasks = new Firebase(FIREBASE).child('tasks/data')

class Featured extends Component {
  componentDidMount(){
    this.props.fetchTasks(tasks)
    
    tasks.on('value', (snapshot) => {
      this.props.updateTasks(snapshot)
    })
  }

  render() {
    return (
      <div>
        <TaskList tasks={this.props.tasks} removeTask={this.props.removeTask} auth={this.props.auth}/>
      </div>
    )
  }
}

export default Featured