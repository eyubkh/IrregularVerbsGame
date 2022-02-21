import styled from 'styled-components'

const Button = styled.button`
  padding: 15px 35px;
  font-size: 1.063rem;
  border-radius: .2rem;
  border: none;
  box-shadow: 2px 2px 0px #f0e478;
  cursor: pointer;
  background-color: #FAEE7D;

  :hover {
    background-color: #f5e97a ;
  }
`

const SimpleButton = ({ handler, text, keyPress }) => {
  return <Button
          onKeyDown={keyPress}
          text={text}
          onClick={handler}
        >
          {text}
        </Button>
}

export default SimpleButton
