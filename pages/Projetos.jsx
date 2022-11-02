import styled from "styled-components"
import Button from "../src/components/button/Button"
import Header from "../src/components/header/Header"
import Footer from "../src/components/footer/Footer"
import Subtitle from "../src/components/subtitle/Subtitle"

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 600px;

  @media (max-width:768px){
    flex-direction: column;
    align-items:center;
    gap: 20px;
    height: 100%;
    margin-bottom: 30px;
  }
`

const StyledCard = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  margin-top: 20px;
  width: 300px;
  gap: 10px;
  border: 3px solid white;
  padding: 0 30px;
`

const StyledTitulo = styled.h2`
  color: white;
  font-size: 35px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
`

const StyledH3 = styled.h3`
  color: lightgreen;
  font-size: 25px;
`

const StyledText = styled.p`
  color: white;
  font-size: 18px;
  margin: 10px 0;
`

function Projetos(){
  return(
    <>
      <Header/>
      <StyledTitulo>Meus projetos</StyledTitulo>  
      <StyledContainer>
        <StyledCard>
          <StyledH3>Social Dev</StyledH3>
          <StyledText>oooo</StyledText>
          <Button text="sssss"/>
        </StyledCard>
        <StyledCard>
        <StyledH3>jogo da velha</StyledH3>
          <StyledText>oooo oooo ddddasd dadadad oooo oooo ddddasd dadadad dasdasdasdasdsadasd</StyledText>
          <Button text="sssss"/>
        </StyledCard>
        <StyledCard>
        <StyledH3>Hotel Next</StyledH3>
          <StyledText>oooo oooo ddddasd dadadad</StyledText>
          <Button text="sssss"/>
        </StyledCard>
      </StyledContainer>
      <Footer/>
    </>
  )
}


export default Projetos