import React, { PropTypes, Component } from 'react'

class TaskInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: ''
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(e) {
    this.setState({inputText: e.target.value})
  }
  
  handleSubmit() {
    const { addTask, avatar, username } = this.props
    addTask(this.state.inputText, this.refs.priority.value, avatar, username)
    this.setState({ inputText: '' })
  }
  
  render(){
    return (
      <div className="container">
      <div className="card-panel white">
      <div>
        <input 
        type="text"
        value={this.state.inputText}
        onChange={this.handleChange}
        placeholder="add task..."
        />
        </div>
        <br />
        <label>Select priority</label>
        <div>
          <select className="browser-default" ref="priority">
            <option value="Low">Low</option>
            <option value="High">High</option>
          </select>
        </div>
        <br />
        <a className="btn black" onClick={this.handleSubmit}>
        <i className="material-icons left">note_add</i>Add Task</a>
        </div>
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