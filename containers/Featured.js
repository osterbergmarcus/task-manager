import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { FIREBASE }           from '../redux/constants'
import Counter                from '../components/Counter'
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
        <Counter tasks={this.props.tasks}/>
        <TaskList tasks={this.props.tasks} removeTask={this.props.removeTask}/>
      </div>
    )
  }
}

//Using connector to connect the component to the provided store
//connect() maps the state and dispatch action
//passing down from the provider as props to the child components 
function mapStateToProps(state) {
  return {
    loading: state.userfeedback.loading,
    tasks: state.tasks.data
  }
}

//Wrapping actions with the dispatcher
function mapDispatchToProps(dispatch){
  return {
    fetchTasks:    bindActionCreators(actions.fetchTasks, dispatch),
    updateTasks:   bindActionCreators(actions.updateTasks, dispatch),
    removeTask:   bindActionCreators(actions.removeTask, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Featured)