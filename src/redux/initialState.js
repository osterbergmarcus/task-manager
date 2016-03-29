let initialState = {
  tasks: {
    data: [],
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