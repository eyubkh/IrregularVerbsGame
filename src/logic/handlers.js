import { useDispatch, useSelector } from 'react-redux'

import { randomNumber, inputValue, message, isChecking, isCorrect } from '../redux/actions/metaStateAction'
import { correct } from '../redux/actions/dataStateAction'

export const useHandler = () => {
  const dispatch = useDispatch()
  const { dataLength, current, meta } = useSelector(state => {
    const { data, meta } = state
    const dataLength = data.length
    const current = data[meta.randomNumber]
    return {
      dataLength,
      current,
      meta
    }
  })

  const Continue = () => {
    if (meta.isChecking) {
      dispatch(correct(meta.randomNumber))
      dispatch(randomNumber(dataLength))
    } else {
      dispatch(randomNumber(dataLength))
    }
    dispatch(inputValue(''))
    dispatch(message(''))
    dispatch(isChecking(false))
  }

  const Check = () => {
    const re = new RegExp(`^${meta.inputValue}$`, 'ig')
    const test = re.test(current.past)
    if (test) {
      dispatch(isCorrect(true))
      dispatch(message('correct verb'))
    } else {
      dispatch(isCorrect(false))
      dispatch(message('wrong verb'))
    }
    dispatch(isChecking(true))
  }

  const Skip = () => {
    dispatch(message('wrong verb'))
    dispatch(isChecking(true))
    dispatch(isCorrect(false))
  }

  return {
    Continue,
    Check,
    Skip
  }
}
