import React      from 'react'
import TaskInput  from '../components/TaskInput'

const AddTasks = ({ addTask, auth }) => {
  return (
    <div>
      <div>Add Tasks</div>
      <TaskInput addTask={addTask} auth={auth}/>
    </div>
  )
}

export default AddTasks
