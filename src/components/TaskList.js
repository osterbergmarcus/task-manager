import React, { PropTypes } from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, removeTask, updateTask}) => {
  return (
    <div className="container">
    <ul className="collection high-priority">
      <li className="collection-item avatar red darken-1">
        {tasks.map((task) => {
          if(task.priority === 'High') {
            return (<TaskItem
                      key={task.id}
                      task={task}
                      removeTask={removeTask}
                      updateTask={updateTask} 
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
                  />)
          }
        })}
      </li>
    </ul>
    </div>
  )
}

export default TaskList

//proptypes
TaskItem.propTypes = {
  tasks: PropTypes.array,
  removeTask: PropTypes.func,
  updateTask: PropTypes.func
}