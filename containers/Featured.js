import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { FIREBASE }           from '../redux/constants'
import Counter                from '../components/Counter'
import TaskList               from '../components/TaskList'
import * as actions           from '../redux/actions/userActions'
import Firebase               from 'firebase'

class Featured extends Component {
  componentDidMount(){
    const tasks = new Firebase(FIREBASE).child('tasks')
    this.props.fetchTasks(tasks)
  }
  
  render() {
    return (
      <div>
        <h2>{this.props.loading ? 'Loading' : 'DONE LOADING'}</h2>
        <div>Not signed in</div>
        <Counter tasks={this.props.tasks}/>
        <TaskList toggleTask={this.props.toggleTask} tasks={this.props.tasks}/>
      </div>
    )
  }
}

//Using connector to connect the component to the provided store
//connect() maps the state and dispatch action
//passing down from the provider as props to the child components 
function mapStateToProps(state) {
  return state
}

//Wrapping actions with the dispatcher
function mapDispatchToProps(dispatch){
  return {
    toggleTask: bindActionCreators(actions.toggleTask, dispatch),
    fetchTasks: bindActionCreators(actions.fetchTasks, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Featured)