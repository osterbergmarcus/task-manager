import React, { PropTypes }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTask }            from '../redux/modules/tasks'
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
** mapStateToProps, mapDispatchToProps
*/ 
export default connect(
  (state) => ({ auth: state.auth }),
  (dispatch) => ({ addTask: bindActionCreators(addTask, dispatch) })
)(AddTasks)
