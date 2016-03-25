let initialState = {
  tasks: {
    data: [],
    loading: false,
    hasreceiveddata: false,
    submittingnew: false
  },
  auth: {
    current: '',
    username: null,
    userid: null
  },
  userfeedback: {
    loading: false,
    message: ''
  }
}

export default initialState