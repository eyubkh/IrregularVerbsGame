// Components
import { VerbForm } from '../molecules/VerbForm'
// Styled
import styled from 'styled-components'
// Redux
import { useSelector } from 'react-redux'

const MainStyle = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  height: 80vh;
`

export const Main = () => {
  const state = useSelector(state => state)
  console.log(state)
  return (
    <MainStyle>
      <VerbForm verbform='infinitive' verbword='go' />
      <VerbForm verbform='past' />
      <VerbForm verbform='participle' verbword='gone' />
    </MainStyle>
  )
}
