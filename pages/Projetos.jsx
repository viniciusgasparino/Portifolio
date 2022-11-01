import styled from "styled-components"
import Button from "../src/components/button/Button"
import Header from "../src/components/header/Header"
import Footer from "../src/components/footer/Footer"

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 800px;

  @media (max-width:768px){
    flex-direction: column;
    align-items:center;
    gap: 20px;
    height: 100%;
  }
`

const StyledCard = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  height: 400px;
  margin-top: 20px;
  width: 300px;
  gap: 50px;
  background-color: yellow;
`

const StyledTitulo = styled.h1`
  color: white;
  font-size: 45px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`

const StyledText = styled.p`
  color: white;
  font-size: 20px;
  margin: 30px 0;
`

function Projetos(){
  return(
    <>
      <Header/>
      <StyledTitulo>Meus projetos</StyledTitulo>  
      <StyledContainer>
        <StyledCard>
          <h3>Jogo da Velha</h3>
          <StyledText>oooo oooo</StyledText>
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