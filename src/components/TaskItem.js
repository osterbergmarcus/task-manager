import React, { PropTypes } from 'react'
import EditItem             from './EditItem'

const TaskItem = ({task, removeTask, updateTask}) => {
  return (
     <ul className="collection">
      <EditItem
        task={task}
        removeTask={removeTask}
        updateTask={updateTask}
      />
     </ul>
  )
}

export default TaskItem

//proptypes
TaskItem.propTypes = {
  task: PropTypes.object,
  removeTask: PropTypes.func,
  updateTask: PropTypes.func
}