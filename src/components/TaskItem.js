import React    from 'react'
import EditItem from './EditItem'

const TaskItem = ({task, removeTask, editTask, editing}) => {
  return (
    <div> 
      <ul className="collection">
        <li className="collection-item avatar">
          <img src={task.avatar} className="circle" />
          <EditItem task={task} editing={editing}/>
          <p>Priority: {task.priority}</p>
          <p>{task.username}</p>
          <div>  
            <a className="btn" onClick={() => removeTask(task.id)}>
            <i className="material-icons left">delete</i>Delete</a>
          </div>
          <div>  
            <a className="btn" onClick={() => editTask()}>
            <i className="material-icons left">swap_horiz</i>Edit</a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default TaskItem

//proptypes
TaskItem.propTypes = {
  task: React.PropTypes.object,
  removeTask: React.PropTypes.func,
  editTask: React.PropTypes.func,
  editing: React.PropTypes.bool
}