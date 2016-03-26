import React    from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, removeTask, auth}) => {
  return (
    <div>
    <ul className="high-priority">
    {tasks.map(task => {
      if(task.priority === 'High') {
        return (<TaskItem key={task.id} task={task} removeTask={removeTask} auth={auth}/>)
      }
    })}   
    </ul>
    <ul className="low-priority">
    {tasks.map(task => {
      if(task.priority === 'Low') {
        return (<TaskItem key={task.id} task={task} removeTask={removeTask} auth={auth}/>)
      }
    })}   
    </ul>
    </div>
  )
}

export default TaskList