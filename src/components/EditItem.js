import React, { PropTypes, Component } from 'react'

class EditItem extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      editing: false
    }
    
    this.saveTask = this.saveTask.bind(this)
    this.editTask = this.editTask.bind(this)
  }    

  saveTask(){
    const { task } = this.props
    this.props.updateTask(task.id, this.refs.inputValue.value, task.username)
    this.editTask
  }
  
  editTask(){
    this.setState({editing: !this.state.editing})
  }
  
  render(){
    const { task, removeTask } = this.props
      return (
        <div>
        {this.state.editing ?
          <li className="collection-item avatar">
            <img src={task.avatar} className="circle" />
            <span className="title">
              <input
                type="text"
                defaultValue={task.text} 
                autoFocus
                ref="inputValue"
              />
            </span>
            <div>  
              <a className="btn" onClick={() => this.saveTask()}>
              <i className="material-icons left">done</i>Save</a>
            </div>
            <p>Priority: {task.priority}</p>
            <p>{task.username}</p>
          </li>
        : 
          <li className="collection-item avatar">
            <img src={task.avatar} className="circle" />
            <span className="title">{task.text}</span>
            <p>Priority: {task.priority}</p>
            <p>{task.username}</p>
            <div>  
              <a className="btn" onClick={() => removeTask(task.id)}>
              <i className="material-icons left">delete</i>Delete</a>
            </div>
            <div>
              <a className="btn" onClick={() => this.editTask()}>
              <i className="material-icons left">swap_horiz</i>Edit</a>
            </div>  
          </li>
        }
        </div>
      )
  }
}

export default EditItem

//proptypes
EditItem.propTypes = {
  task: PropTypes.object,
  updateTask: PropTypes.func
}