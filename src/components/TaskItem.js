import React from 'react'

const TaskItem = ({task, removeTask}) => {
  return (
    <li onClick={() => removeTask(task.id, task.priority)}>{task.text}</li>
  )
}

export default TaskItem

    // <ul className="collection">
    //   <li className="collection-item avatar">
    //     <img src="" alt="" className="circle">
    //     <span className="title">Title</span>
    //   </li>
    // </ul>