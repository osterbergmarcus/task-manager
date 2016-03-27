import React      from 'react'

const EditItem = ({ task, editing }) => {
  if(editing){
    return (
      <span className="title">
      <input
        type="text"
        defaultValue={task.text} 
        autoFocus />
      <div>  
        <a className="btn">
        <i className="material-icons left">done</i>Save</a>
      </div>
      </span>
    )
  } else {
    return (
      <span className="title">{task.text}</span>
    )
  }
}

export default EditItem

//proptypes
