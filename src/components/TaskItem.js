import React from 'react'

const TaskItem = ({task, removeTask, auth}) => {
  return (
    <div> 
      <ul className="collection">
        <li onClick={() => removeTask(task.id, task.priority)}
            className="collection-item avatar">
          <img src={auth.avatar} className="circle" />
          <span className="title">{task.text}</span>
          <p>Priority: {task.priority}</p>
          <p>{auth.username}</p>
        </li>
      </ul>
    </div>
  )
}

export default TaskItem