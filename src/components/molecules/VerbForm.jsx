// Component
import Span from '../atoms/Span'
import VerbText from '../atoms/VerbText'
import Input from '../atoms/Input'
// Style
import styled from 'styled-components'

const Div = styled.div`
  background-color: aliceblue;
  padding: 30px 20px;
  text-align: center;
  margin: 0 10px;
`

export const VerbForm = ({ verbform, verbword }) => {
  return (
    <Div>
      <Span text={verbform} /><br/>
      {
        verbword
          ? <VerbText text={verbword} />
          : <Input />
      }
    </Div>
  )
}
