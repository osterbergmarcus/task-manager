let initialState = {
  tasks: {
    data: [],
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