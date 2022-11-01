import styled from "styled-components"
import Header from "../src/components/header/Header"
import Footer from "../src/components/footer/Footer"

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
    <>
    <Header/>
    <StyledContact>
      <h2>Entre em contato</h2>
      <StyledContainer>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
        <p>Email: vinciiusgasparino@yahoo.com.br</p>
        <p>Whatssap: 11974766267</p>
      </StyledContainer>
    </StyledContact>
    <Footer/>
    </>
  )
}

export default Contatos