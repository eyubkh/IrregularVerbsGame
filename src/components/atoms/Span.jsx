import styled from 'styled-components'

const SpanText = styled.span`
  font-size: 1.063rem;
  margin-bottom: 15px;
  color: #161616;
  opacity: 60%;
`

const Span = ({ text }) => {
  return <SpanText>{text}</SpanText>
}

export default Span
