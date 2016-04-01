import React, { PropTypes } from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, removeTask, updateTask, auth}) => {
  return (
    <div className="container">
    <ul className="collection high-priority">
      {tasks.map((task) => {
        if(task.priority === 'High') {
          return (
            <div>
            <TaskItem
              key={task.id}
              task={task}
              removeTask={removeTask}
              updateTask={updateTask}
              auth={auth}
            />
            <div className="divider" />
            </div>
          )
        }
      })}  
    </ul>
    <ul className="collection low-priority">
      {tasks.map((task) => {
        if(task.priority === 'Low') {
          return (
            <div>
            <TaskItem
              key={task.id}
              task={task}
              removeTask={removeTask}
              updateTask={updateTask}
              auth={auth}
            />
            <div className="divider" />
            </div>
          )
        }
      })}
    </ul>
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