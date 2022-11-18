import styled from "styled-components"
import Button from "../src/components/button/Button"
import Header from "../src/components/header/Header"
import Footer from "../src/components/footer/Footer"

const StyledCenter = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 800px;
  padding: 20px 0;
  
  
  @media (max-width:700px){
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
  margin-bottom: 20px;
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
  text-align: center;
`

const StyledLink = styled.a`
  color: #f41010;
  text-decoration: none;
  font-size: 17px;
  font-weight: bold;
`

function Projetos(){
  return(
    <>
      <Header />
      <StyledTitulo>Meus projetos</StyledTitulo> 
      <StyledCenter>
      <StyledContainer>
        <StyledCard>
          <StyledH3>Social Dev</StyledH3>
          <StyledText>Lorem ipsum dolor sit, amet consectetur adip</StyledText>
          <a 
            target="_black" 
            href="https://vercel.com/viniciusgasparino/social-dev">
            <Button text="Ver projeto"/>
          </a>
          <StyledLink href="#">Ver código</StyledLink>
        </StyledCard>
        <StyledCard>
        <StyledH3>jogo da velha</StyledH3>
          <StyledText>Lorem ipsum dolor sit, amet consectetur adip</StyledText>
          <a 
            target="_black" 
            href="https://react-jogo-da-velha-flame.vercel.app/">
            <Button text="Ver projeto"/>
          </a>
          <StyledLink href="#">Ver código</StyledLink>
        </StyledCard>
        <StyledCard>
        <StyledH3>Calculadora</StyledH3>
          <StyledText>Lorem ipsum dolor sit, amet consectetur adip</StyledText>
          <a 
            target="_black" 
            href="https://calculadora-one-puce.vercel.app/">
            <Button text="Ver projeto"/>
          </a>
          <StyledLink href="#">Ver código</StyledLink>
        </StyledCard>
        <StyledCard>
        <StyledH3>Hotel Next</StyledH3>
          <StyledText>Lorem ipsum dolor sit, amet consectetur adip</StyledText>
          <a 
            target="_black" 
            href="https://hotelnext.vercel.app/">
            <Button text="Ver projeto"/>
          </a>
          <StyledLink href="#">Ver código</StyledLink>
        </StyledCard>
        <StyledCard>
        <StyledH3>Lista de Tarefas</StyledH3>
          <StyledText>Lorem ipsum dolor sit, amet consectetur adip</StyledText>
          <a 
            target="_black" 
            href="https://todolist-flame-seven.vercel.app/">
            <Button text="Ver projeto"/>
          </a>
          <StyledLink href="#">Ver código</StyledLink>
        </StyledCard>
      </StyledContainer>~
      </StyledCenter> 
      <Footer/>
    </>
  )
}


export default Projetos