import { META } from '../CONSTANS'

const metaDefaultInitialState = {
  randomNumber: 0,
  isCorrect: false,
  isChecking: false,
  inputValue: ''
}

export const metaStateReducer = (state = metaDefaultInitialState, action) => {
  switch (action.type) {
    case META.isChecking:
      return { ...state, isChecking: action.payload }
    case META.message:
      return { ...state, message: action.payload }
    case META.isCorrect:
      return { ...state, isCorrect: action.payload }
    case META.randomNumber: {
      const randomNumber = Math.floor(Math.random() * action.payload)
      return { ...state, randomNumber }
    }
    case META.inputValue: {
      return { ...state, inputValue: action.payload }
    }
    default:
      return state
  }
}
