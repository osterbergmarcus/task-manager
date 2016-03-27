import React    from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, removeTask}) => {
  return (
    <div>
    <ul className="high-priority">
    {tasks.map(task => {
      if(task.priority === 'High') {
        return (<TaskItem key={task.id} task={task} removeTask={removeTask}/>)
      }
    })}   
    </ul>
    <ul className="low-priority">
    {tasks.map(task => {
      if(task.priority === 'Low') {
        return (<TaskItem key={task.id} task={task} removeTask={removeTask}/>)
      }
    })}   
    </ul>
    </div>
  )
}

export default TaskList

//proptypes
TaskItem.propTypes = {
  tasks: React.PropTypes.array,
  removeTask: React.PropTypes.func
}