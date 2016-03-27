import React, { Component } from 'react'
import { FIREBASE }         from '../redux/constants'
import TaskList             from '../components/TaskList'
import Firebase             from 'firebase'

//firebase ref
const tasks = new Firebase(FIREBASE).child('tasks/data')

class Featured extends Component {
  componentDidMount(){
    //fetching and returns data once from the server
    this.props.fetchTasks(tasks)
    
    //setting up a event listener for on value change for tasks
    tasks.on('value', (snapshot) => {
      this.props.updateTasks(snapshot)
    })
  }

  render() {
    return (
      <div>
        <TaskList tasks={this.props.tasks} removeTask={this.props.removeTask}/>
      </div>
    )
  }
}

export default Featured

//proptypes
Featured.propTypes = {
    fetchTasks: React.PropTypes.func,
    updateTasks: React.PropTypes.func
}
  