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
    const { task } = this.props
    this.props.updateTask(task.id, this.refs.inputValue.value, task.username)
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
           <div>
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
              <a className="btn" onClick={() => this.saveTask()}>
              <i className="material-icons left">done</i>Save</a>
            </p>
            <br />
           </div>
        : 
           <div>
            <img src={task.avatar} className="circle" />
            <p><strong>{task.username}</strong></p>
            <span className="title center"><h2>{task.text}</h2></span>
            <p>
              <a className="btn" onClick={() => removeTask(task.id)}>
              <i className="material-icons">delete</i></a>
              <a className="btn" onClick={() => this.editTask()}>
              <i className="material-icons">swap_horiz</i></a>
            </p>
            <br />
           </div>
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