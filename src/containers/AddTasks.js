import React, { Component }   from 'react'
import TaskInput              from '../components/TaskInput'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTask }            from '../redux/actions/userActions'


const AddTasks = ({addTask}) => {
  return (
    <div>
      <div>Add Tasks</div>
      <TaskInput addTask={addTask}/>
    </div>
  )
}

//Making state avaivable as props
const mapStateToProps = (state) => state

//Wrapping action creators into the dispatcher and making actions avaivable as props
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: bindActionCreators(addTask, dispatch)
  }
}

//exports component connected to redux
export default connect(mapStateToProps, mapDispatchToProps)(AddTasks)
