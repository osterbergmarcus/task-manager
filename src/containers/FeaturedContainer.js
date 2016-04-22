import React, { PropTypes, Component } from 'react'
import { connect }                     from 'react-redux'
import { bindActionCreators }          from 'redux'
import TaskActions                     from '../redux/actions/TaskActions'
import AuthActions                     from '../redux/actions/AuthActions'
import { FIREBASE }                    from '../redux/constants'
import { TaskList }                    from '../components'

//firebase ref
const tasks = new Firebase(FIREBASE).child('tasks/data')

class Featured extends Component {
  componentDidMount() {
    //check if user is authenticated or not
    this.props.authCheck()
    
    //fetching and returns data once from the server
    this.props.getTasks(tasks)
    
    //setting up a event listener for on value change for tasks
    tasks.on('value', (snapshot) => {
      this.props.subscribeTasks(snapshot)
    })
  }
  
  componentWillUnmount() {
    // unsubscribe to tasks when component is unmounted
    tasks.off('value')
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

// Proptypes
Featured.propTypes = {
  fetchTasks: PropTypes.func,
  syncTasks: PropTypes.func,
  subscribeTasks: PropTypes.func,
  removeTask: PropTypes.func,
  authCheck: PropTypes.func,
  tasks: PropTypes.array,
  auth: PropTypes.object
}

/* Exporting and connecting component
** to state and dispatcher
*/ 
export default connect(
  (state) => ({
    loading: state.userfeedback.loading,
    tasks: state.tasks.data,
    auth: state.auth
  }),
  (dispatch) => ({
    authCheck:      bindActionCreators(AuthActions.authCheck, dispatch),
    getTasks:       bindActionCreators(TaskActions.getTasks, dispatch),
    subscribeTasks: bindActionCreators(TaskActions.subscribeTasks, dispatch),
    removeTask:     bindActionCreators(TaskActions.removeTask, dispatch),
    updateTask:     bindActionCreators(TaskActions.updateTask, dispatch)
  })  
)(Featured)