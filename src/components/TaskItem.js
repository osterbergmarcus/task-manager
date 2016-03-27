import React from 'react'

const TaskItem = ({task, removeTask}) => {
  return (
    <div> 
      <ul className="collection">
        <li onClick={() => removeTask(task.id, task.priority)}
            className="collection-item avatar">
          <img src={task.avatar} className="circle" />
          <span className="title">{task.text}</span>
          <p>Priority: {task.priority}</p>
          <p>{task.username}</p>
        </li>
      </ul>
    </div>
  )
}

export default TaskItem

//proptypes
TaskItem.propTypes = {
  task: React.PropTypes.object,
  removeTask: React.PropTypes.func
}