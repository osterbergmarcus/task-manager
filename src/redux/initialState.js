let initialState = {
  tasks: {
    data: [],
    editing: false,
    hasreceiveddata: false,
    submittingnew: false
  },
  auth: {
    status: 'ANONYMOUS',
    username: 'Guest',
    uid: null,
    avatar: ''
  },
  userfeedback: {
    loading: false,
    message: ''
  }
}

export default initialState