import React, { Component } from 'react'

class TaskInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: ''
    }
  }
  
  _handleChange(e){
    this.setState({inputText: e.target.value})
  }
  
  _handleSubmit(event){
    if(!this.state.inputText){
      console.log("add input text")
    } else {
      this.props.addTask(this.state.inputText, this.refs.priority.value)
      this.state.inputText = ''
    }
  }
  
  render(){
    return (
      <div className="container">
      <div>
        <input 
        type="text"
        value={this.state.inputText}
        onChange={this._handleChange.bind(this)}
        />
        </div>
        <div>
          <select className="browser-default" ref="priority">
            <option value="Low">Low</option>
            <option value="High">High</option>
          </select>
        </div>  
        <a className="waves-effect waves-light btn" onClick={this._handleSubmit.bind(this)}>
        <i className="material-icons left">note_add</i>Add Task</a>
      </div>
    )
  }
}

export default TaskInput