// Components
import Button from '../atoms/SimpleButton'
// Style
import styled from 'styled-components'
// Redux
import { useSelector } from 'react-redux'
// logic
import { useHandler } from '../../logic/handlers'

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20vh;
  animation: 1s ease-in;
  background-color: ${props => {
    if (props.color.reset === false) return 'white'
    if (props.color.correct === true) return '#86FA7D'
    if (props.color.correct === false) return '#FA827D'
  }};
`

export const CheckFooter = () => {
  const { Continue, Check, Skip } = useHandler()
  const { meta } = useSelector(state => state)

  return (
    <Div color={{ correct: meta.isCorrect, reset: meta.isChecking }}>
      {
        meta.isChecking
          ? ''
          : <Button
              text='Skip'
              handler={Skip}
            />
      }
      {
        meta.isCorrect
          ? <p style={{ color: '#161616', fontSize: '20px' }}>{meta.message}</p>
          : <p style={{ color: '#161616', fontSize: '20px' }}>{meta.message}</p>
      }
      {
        meta.isChecking
          ? <Button
              text='Continue'
              handler={Continue}
            />
          : <Button
              text='Check'
              handler={Check}
            />
      }
    </Div>
  )
}
