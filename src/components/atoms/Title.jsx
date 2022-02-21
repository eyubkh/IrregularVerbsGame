import styled from 'styled-components'

const Header = styled.h2`
  font-weight: 600;
  font-size: 4.5rem;
  line-height: 120%;
  color: #7F8BFA;
  text-transform: uppercase;
`
const Title = ({ text }) => {
  return <Header>{text}</Header>
}

export default Title
