let initialState = {
  tasks: {
    data: [],
    loading: false,
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