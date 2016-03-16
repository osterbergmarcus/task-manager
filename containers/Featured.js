import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import Counter                from '../components/Counter'
import TaskList               from '../components/TaskList'
import * as actions           from '../redux/actions/userActions'


class Featured extends Component {
  // componentDidMount(){
  //   this.props.fetchTasks()
  // }
  
  render() {
    return (
      <div>
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
    toggleTask: bindActionCreators(actions.toggleTask, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Featured)