export const verbs = () => ({
  type: '@verbs/current'
})

export const initalState = () => {
  return async dispatch => {
    // const payload = await window.fetch('http://localhost:3001/api/').then(res => res.json()).then(data => data)
    const payload = { a: 'hola' }
    dispatch({
      type: '@verbs/initialState',
      payload
    })
  }
}
