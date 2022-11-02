import styled from "styled-components"
import Header from "../src/components/header/Header"
import Footer from "../src/components/footer/Footer"

const StyledContact = styled.div`
  height: 700px; 
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const StyledTitulo = styled.h2`
  color: white;
  font-size: 35px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`

function Contatos(){
  return(
    <>
    <Header/>
    <StyledContact>
      <StyledTitulo>Entre em contato</StyledTitulo>
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