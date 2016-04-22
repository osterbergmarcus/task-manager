import initialState from '../initialState'

// Constants
const SERVER_REQUEST = 'SERVER_REQUEST'
const PUSH_DATA = 'PUSH_DATA'
const SERVER_RESPONSE = 'SERVER_RESPONSE'
const SYNC_TASKS = 'SYNC_TASKS'
const NOTIFICATION = 'NOTIFICATION'
const FIREBASE = 'https://bayoga.firebaseio.com/'

// Action creators
const itemRef = new Firebase(FIREBASE).child('tasks/data')

export function addTask(text, priority, avatar, username) {
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
}

export function removeTask(taskID) {
  return (dispatch) => {
    itemRef.child(`${taskID}`).remove((error) => {
      if (error) {
        dispatch({ type: NOTIFICATION, message: `Failed to delete task ${error}` })
      } else {
        dispatch({ type: NOTIFICATION, message: 'Task succesfully deleted' })
      }
    })
  }
}

export function updateTask(taskID, text, username, avatar) {
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
}

// Server request
export function getTasks(fireBaseRef) {
  return (dispatch) => {
    dispatch({ type: SERVER_REQUEST, request: true })
    fireBaseRef.once('value', (snapshot) => {
      const tasks = snapshot.val()
      dispatch({ type: SERVER_RESPONSE, request: false })
    })
  }
}

export function subscribeTasks(fireBaseRef) {
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

// Reducer
export default function reducer(state = initialState.tasks, action) {
  switch(action.type) {
    case SYNC_TASKS:
      return Object.assign({}, state, { data: action.data })
    default:
      return state
  }
}