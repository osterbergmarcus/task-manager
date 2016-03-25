import React from 'react'

const TaskItem = ({task, removeTask}) => {
  return (
    <li onClick={() => removeTask(task.id, task.priority)}>{task.text}</li>
  )
}

export default TaskItem