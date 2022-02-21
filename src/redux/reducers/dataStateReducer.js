import { DATA } from '../CONSTANS'

export const dataStateReducer = (state = [], action) => {
  switch (action.type) {
    case DATA.correct:
      state.splice(action.payload, 1)
      return [...state]
    case DATA.initialState: {
      state = action.payload
      return state
    }
    default:
      return state
  }
}
