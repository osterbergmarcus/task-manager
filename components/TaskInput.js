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
        placeholder="Add task"
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
        <button onClick={this._handleSubmit.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default TaskInput