import React, { PropTypes }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import TaskActions            from '../redux/actions/TaskActions'
import { TaskInput }          from '../components'

const AddTasks = ({ addTask, auth }) => {
  return (
    <div>
      <TaskInput 
        addTask={addTask}
        {...auth}
      />
    </div>
  )
}

// Proptypes
AddTasks.propTypes = {
  addTask: PropTypes.func,
  auth: PropTypes.object
}

/* Exporting and connecting component
** to state and dispatcher
*/ 
export default connect(
  (state) => ({
    auth: state.auth
  }),
  (dispatch) => ({
    addTask: bindActionCreators(TaskActions.addTask, dispatch)
  })
)(AddTasks)
