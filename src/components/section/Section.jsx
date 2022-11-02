import styled from "styled-components"
import Subtitle from "../subtitle/Subtitle"
import Button from "../button/Button"


const StyledSection = styled.section`
  margin-top: 20px;
  padding: 100px 20px;
  display: flex;
  width: 100%;
  height: 700px;

  @media (max-width: 700px){
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`

const StyledContainer = styled.div`
  flex-direction: column;
  margin-left: 100px;
  width: 50%;

  @media (max-width: 700px){
    width: 100%;
    margin-bottom: 70px;
  }
`

const StyledText = styled.p`
  color: white;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
`


function Section(){
  return(  
    <>
      <StyledSection>
        <StyledContainer>
          <Subtitle text="Vinicius"/>
          <StyledText>FullStack Developer</StyledText>
          <StyledText>Lorem ipsum,
            dolor sit amet consectetur adipisicing elit,
            dolor sit amet consectetur adipisicing elit.
          </StyledText>
          <Button text="Ver Projetos"/>
        </StyledContainer>
        <StyledContainer>
        <Subtitle text="Vinicius"/>
          <StyledText>FullStack Developer</StyledText>
          <StyledText>Lorem ipsum,
            dolor sit amet consectetur adipisicing elit,
            dolor sit amet consectetur adipisicing elit.
          </StyledText>
          <Button text="Ver Projetos"/>
        </StyledContainer>
      </StyledSection>
    </> 
  )
}

export default Section