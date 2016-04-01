import React, { PropTypes } from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, removeTask, updateTask, auth}) => {
  return (
    <div className="container">
    <div className="divider" />
    <ul className="collection high-priority">
      <li className="collection-item avatar red">
        {tasks.map((task) => {
          if(task.priority === 'High') {
            return (<TaskItem
                      key={task.id}
                      task={task}
                      removeTask={removeTask}
                      updateTask={updateTask}
                      auth={auth}
                  />)
          }
        })}  
      </li>
    </ul>
    <ul className="collection low-priority">
      <li className="collection-item avatar grey">
        {tasks.map((task) => {
          if(task.priority === 'Low') {
            return (<TaskItem
                      key={task.id}
                      task={task}
                      removeTask={removeTask}
                      updateTask={updateTask}
                      auth={auth}
                  />)
          }
        })}
      </li>
    </ul>
    <div className="divider" />
    <br />
    </div>
  )
}

export default TaskList

//proptypes
TaskItem.propTypes = {
  tasks: PropTypes.array,
  removeTask: PropTypes.func,
  updateTask: PropTypes.func,
  auth: PropTypes.object
}