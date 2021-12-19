const verbsReducer = (state = [], action) => {
  switch (action.type) {
    case '@verbs/current':
      return state[0]
    case '@verbs/initialState':
      state = action.payload
      return state
    default:
      return state
  }
}

export default verbsReducer
