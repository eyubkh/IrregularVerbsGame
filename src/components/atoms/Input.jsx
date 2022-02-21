import styled from 'styled-components'

const InputText = styled.input`
  font-size: 2.75rem;
  font-weight: 700;
  border: none;
  width: 230px;
  border-bottom: 2px solid #7F8BFA;
  outline: none;
  padding: 5px 15px;
  background-color: transparent;
  text-align: center;
  :disabled {
    background-color:  hsla(0, 0%, 9%,0.1);
    cursor: not-allowed;
    border-bottom: 2px solid #7F8BFA;
  }
`

const Input = ({ isDisabled, handler, value }) => {
  return <InputText
          disabled={isDisabled}
          onChange={handler}
          isDisabled
          autoFocus
          value={value}
          onKeyDown={(e) => { console.log(e) }}
          type="text"
        ></InputText>
}

export default Input
