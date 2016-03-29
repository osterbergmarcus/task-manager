import React, { PropTypes } from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, removeTask, updateTask}) => {
  return (
    <div className="container">
    <ul className="high-priority">
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
    </ul>
    <ul className="low-priority">
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