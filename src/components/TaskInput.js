import React, { PropTypes, Component } from 'react'

class TaskInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: ''
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(e){
    this.setState({inputText: e.target.value})
  }
  
  handleSubmit(event){
    const { addTask, auth } = this.props
    addTask(this.state.inputText, this.refs.priority.value, auth.avatar, auth.username)
    this.setState({ inputText: '' })
  }
  
  render(){
    return (
      <div className="container">
      <div>
        <input 
        type="text"
        value={this.state.inputText}
        onChange={this.handleChange}
        />
        </div>
        <div>
          <select className="browser-default" ref="priority">
            <option value="Low">Low</option>
            <option value="High">High</option>
          </select>
        </div>  
        <a className="btn" onClick={this.handleSubmit}>
        <i className="material-icons left">note_add</i>Add Task</a>
      </div>
    )
  }
}

export default TaskInput

//proptypes
TaskInput.propTypes = {
    addTask: PropTypes.func,
    auth: PropTypes.object
}