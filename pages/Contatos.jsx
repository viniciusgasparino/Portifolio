import styled from "styled-components"
import Header from "../src/components/header/Header"
import Footer from "../src/components/footer/Footer"


const StyledContact = styled.div`
  min-height: 800px; 

  @media (max-width:700px){
    width: 100%;
  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 40px;
  gap: 30px;
  color: white;
  font-size: 25px;

  @media (max-width:700px){
    padding-left: 10px;
    font-size: 18px;
  }
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
      <Header />
      <StyledContact>   
        <StyledTitulo>Entre em contato</StyledTitulo>
        <StyledContainer>
          <p><span>Icon</span> Lorem ipsum dolor sit amet, consectetur adipisicing</p>
          <p><span>Icon</span> Email: vinciiusgasparino@yahoo.com.br</p>
          <p><span>Icon</span> Whatssap: 11974766267</p>
        </StyledContainer>
      </StyledContact>
      <Footer/>
    </>
  )
}

export default Contatos