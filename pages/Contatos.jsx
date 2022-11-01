import styled from "styled-components"

const StyledContact = styled.div`
  background-color: yellow;
  height: 1000px;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

function Contatos(){
  return(
    <StyledContact>
      <h2>Entre em contato</h2>
      <StyledContainer>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
        <p>Email: vinciiusgasparino@yahoo.com.br</p>
        <p>Whatssap: 11974766267</p>
      </StyledContainer>
    </StyledContact>
  )
}

export default Contatos