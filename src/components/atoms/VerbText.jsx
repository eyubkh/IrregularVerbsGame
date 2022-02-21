import styled from 'styled-components'

const VerbHeader = styled.h4`
  font-size: 2.75rem;
  color: #161616;
`

const VerbText = ({ text }) => {
  return <VerbHeader>{ text }</VerbHeader>
}

export default VerbText
