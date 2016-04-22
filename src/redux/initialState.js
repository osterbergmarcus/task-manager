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
  feedback: {
    loading: false,
    message: ''
  }
}

export default initialState