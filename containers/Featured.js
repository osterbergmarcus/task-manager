import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { FIREBASE }           from '../redux/constants'
import TaskList               from '../components/TaskList'
import * as actions           from '../redux/actions/userActions'
import Firebase               from 'firebase'

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
        <h2>{this.props.loading ? 'Loading' : 'DONE LOADING'}</h2>
        <div>Not signed in</div>
        <TaskList tasks={this.props.tasks} removeTask={this.props.removeTask}/>
      </div>
    )
  }
}

//Making state avaivable as props
const mapStateToProps = (state) => {
  return {
    loading: state.userfeedback.loading,
    tasks: state.tasks.data
  }
}

//Wrapping action creators into the dispatcher and making actions avaivable as props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks:   bindActionCreators(actions.fetchTasks, dispatch),
    updateTasks:  bindActionCreators(actions.updateTasks, dispatch),
    removeTask:   bindActionCreators(actions.removeTask, dispatch)
  }
}

//exports component connected to redux
export default connect(mapStateToProps, mapDispatchToProps)(Featured)