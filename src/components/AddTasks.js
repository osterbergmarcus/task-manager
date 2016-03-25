import React      from 'react'
import TaskInput  from '../components/TaskInput'

const AddTasks = ({addTask}) => {
  return (
    <div>
      <div>Add Tasks</div>
      <TaskInput addTask={addTask}/>
    </div>
  )
}

export default AddTasks
