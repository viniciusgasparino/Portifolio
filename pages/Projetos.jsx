import styled from "styled-components"
import Button from "../src/components/button/Button"
import Header from "../src/components/header/Header"
import Footer from "../src/components/footer/Footer"

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width:768px){
    flex-direction: column;
    align-items:center;
    gap: 20px;
  }
`

const StyledCard = styled.div`
  margin-top: 20px;
  width: 400px;
  padding: 46px;
  gap: 50px;
  background-color: yellow;
`

const StyledTitulo = styled.h1`
  color: white;
  font-size: 45px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`

const StyledText = styled.p`
  color: white;
  font-size: 20px;
`

function Projetos(){
  return(
    <>
      <Header/>
      <StyledTitulo>Meus projetos</StyledTitulo>  
      <StyledContainer>
        <StyledCard>
          <h3>Jogo da Velha</h3>
          <StyledText>oooo oooo ddddasd dadadad</StyledText>
          <Button text="sssss"/>
        </StyledCard>
        <StyledCard>
          <h3>Social Dev</h3>
          <StyledText>oooo oooo ddddasd dadadad</StyledText>
          <Button text="sssss"/>
        </StyledCard>
        <StyledCard>
          <h3>Social Dev</h3>
          <StyledText>oooo oooo ddddasd dadadad</StyledText>
          <Button text="sssss"/>
        </StyledCard>
      </StyledContainer>
      <Footer/>
    </>
  )
}


export default Projetos