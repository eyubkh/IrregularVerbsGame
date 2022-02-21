// Components
import { VerbForm } from '../molecules/VerbForm'
import TitleTranslate from '../atoms/Title'
// Styled
import styled from 'styled-components'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { inputValue } from '../../redux/actions/metaStateAction'

const MainStyle = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  height: 80vh;
`
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Main = () => {
  const state = useSelector(state => {
    const { data, meta } = state
    return { data: data[meta.randomNumber], inputValue: meta.inputValue }
  })
  const dispatch = useDispatch()
  const handlerChange = ({ target }) => {
    dispatch(inputValue(target.value))
  }
  return (
      <MainStyle>
        <TitleTranslate text={state.data?.translation} />
        <Div>
          <VerbForm verbform='Infinitive' verbword={state.data?.infinitive} />
          <VerbForm verbform='Past' value={state.inputValue} handler={handlerChange} />
          <VerbForm verbform='Participle' verbword={state.data?.participle} />
        </Div>
      </MainStyle>
  )
}
