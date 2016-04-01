import React, { Component, PropTypes } from 'react'

class TaskItem extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      editing: false
    }
    
    this.saveTask = this.saveTask.bind(this)
    this.editTask = this.editTask.bind(this)
  }    

  saveTask(){
    const { task, auth } = this.props
    this.props.updateTask(task.id, this.refs.inputValue.value, auth.username, auth.avatar)
    this.editTask()
  }
  
  editTask(){
    this.setState({ editing: !this.state.editing })
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
            <p>{task.username}</p>
            <p>  
              <a className="btn teal" onClick={() => this.saveTask()}>
              <i className="material-icons left">done</i>Save</a>
            </p>
          </li>
        : 
            <li className="collection-item avatar">
            <img src={task.avatar} className="circle" />
            <span className="title">{task.username}</span>
            <span><h3>{task.text}</h3></span>
              <a className="btn teal" onClick={() => removeTask(task.id)}>
              <i className="material-icons">delete</i></a>
              
              <a className="btn teal" onClick={() => this.editTask()}>
              <i className="material-icons">swap_horiz</i></a>
           </li>
        }
       </div>
      )
  }
}

export default TaskItem

//proptypes
TaskItem.propTypes = {
  task: PropTypes.object,
  updateTask: PropTypes.func,
  removeTask: PropTypes.func
}