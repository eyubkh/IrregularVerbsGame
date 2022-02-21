// Component
import Span from '../atoms/Span'
import VerbText from '../atoms/VerbText'
import Input from '../atoms/Input'
// Redux
import { useSelector } from 'react-redux'
// Style
import styled from 'styled-components'

const Div = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 230px;
  margin: 0 10px;
`

export const VerbForm = ({ verbform, verbword, handler, value }) => {
  const state = useSelector(state => state.meta)
  return (
    <Div>
      <Span text={verbform} />
      {
        verbword
          ? <VerbText text={verbword} />
          : <Input
              isDisabled={state.isChecking ? 'disabled' : ''}
              value={value}
              handler={handler}
            />
      }
    </Div>
  )
}
