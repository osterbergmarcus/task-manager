import { 
  ADD_TASK,
  SERVER_REQUEST, 
  FIREBASE,
  SERVER_RESPONSE,
  PUSH_DATA,
  NOTIFICATION,
  UPDATE_TASK,
  SYNC_TASKS,
  REMOVE_TASK
 } from '../constants'
  
const itemRef = new Firebase(FIREBASE).child('tasks/data')

//Define and export action creators
const TaskActions = {
  addTask(text, priority, avatar, username) {
    return (dispatch) => {
      if (!text) {
        dispatch({ type: NOTIFICATION, message: 'Input text missing' })
      } else {
        dispatch({ type: PUSH_DATA, submit: true })
        itemRef.push({ text, priority, avatar, username }, (error) => {
            if (error) {
              dispatch({ type: NOTIFICATION, message: `Failed to submit task ${error}` })
              dispatch({ type: SERVER_RESPONSE, submit: false })
            } else {
              dispatch({ type: NOTIFICATION, message: 'Task succesfully saved' })
              dispatch({ type: SERVER_RESPONSE, submit: false })
            }
        })
      }
    }
  },

  removeTask(taskID) {
    return (dispatch) => {
      itemRef.child(`${taskID}`).remove((error) => {
        if (error) {
          dispatch({ type: NOTIFICATION, message: `Failed to delete task ${error}` })
        } else {
          dispatch({ type: NOTIFICATION, message: 'Task succesfully deleted' })
        }
      })
    }
  },

  updateTask(taskID, text, username, avatar) {
    return(dispatch) => {
      dispatch({ type: NOTIFICATION, message: 'Requesting change' })
      itemRef.child(`${taskID}`).update({ text, username, avatar }, (error) => {
        if (error) {
          dispatch({ type: NOTIFICATION, message: `Failed to update task ${error}` })
        } else {
          dispatch({ type: NOTIFICATION, message: 'Task succesfully updated' })
        }
      })
    }
  },

  //server request
  getTasks(fireBaseRef) {
    return (dispatch) => {
      dispatch({ type: SERVER_REQUEST, request: true })
      fireBaseRef.once('value', (snapshot) => {
        const tasks = snapshot.val()
        dispatch({ type: SERVER_RESPONSE, request: false })
      })
    }
  },

  subscribeTasks(fireBaseRef) {
    let tasks = []
    fireBaseRef.forEach((child) => {
      tasks.push({
      text: child.val().text,
      priority: child.val().priority,
      id: child.key(),
      username: child.val().username,
      avatar: child.val().avatar
    })
    })
    return {
      type: SYNC_TASKS,
      data: tasks
    }
  }
}

export default TaskActions