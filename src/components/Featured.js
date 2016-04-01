import React, { PropTypes, Component } from 'react'
import { FIREBASE }                    from '../redux/constants'
import TaskList                        from '../components/TaskList'

//firebase ref
const tasks = new Firebase(FIREBASE).child('tasks/data')

class Featured extends Component {
  componentDidMount(){
    //check if user is authenticated or not
    this.props.authCheck()
    
    //fetching and returns data once from the server
    this.props.getTasks(tasks)
    
    //setting up a event listener for on value change for tasks
    tasks.on('value', (snapshot) => {
      this.props.subscribeTasks(snapshot)
    })
  }
  
  render() {
    return (
      <div>
        <TaskList
          tasks={this.props.tasks}
          removeTask={this.props.removeTask} 
          updateTask={this.props.updateTask}
          auth={this.props.auth}
        />
      </div>
    )
  }
}

export default Featured

//proptypes
Featured.propTypes = {
  fetchTasks: PropTypes.func,
  syncTasks: PropTypes.func,
  subscribeTasks: PropTypes.func,
  removeTask: PropTypes.func,
  authCheck: PropTypes.func,
  tasks: PropTypes.array,
  auth: PropTypes.object
}


  