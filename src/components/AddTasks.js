import React, { PropTypes } from 'react'
import TaskInput            from '../components/TaskInput'

const AddTasks = ({ addTask, auth }) => {
  return (
    <div>
      <TaskInput 
        addTask={addTask}
        auth={auth}
      />
    </div>
  )
}

export default AddTasks

//proptypes
AddTasks.propTypes = {
  addTask: PropTypes.func,
  auth: PropTypes.object
}