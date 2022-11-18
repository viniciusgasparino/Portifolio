import styled from "styled-components"
import Subtitle from "../subtitle/Subtitle"
import Button from "../button/Button"


const StyledSection = styled.section`
  margin-top: 20px;
  padding: 100px 20px;
  display: flex;
  width: 100%;
  min-height: 800px;

  @media (max-width: 700px){
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-right: 170px;
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

const StyledH2 = styled.h2`
  color: white;
  font-size: 25px;
`

const StyledH3 = styled.h3`
  color: lightgreen;
  font-size: 20px;
`

const StyledText = styled.p`
  color: white;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 50px;
`


function Section(){
  return(  
    <>
      <StyledSection>
        <StyledContainer>
          <Subtitle text="Vinicius"/>
          <StyledText>FullStack, Frond-End, and Back-end Jr Developer</StyledText>
          <StyledH2>Skills</StyledH2>
          <StyledText>
            <StyledH3>
              Front-End:
            </StyledH3>
              Html, Css, JavaScript, ReactJs, nextJs, Styled-Components, Jquery.
            <StyledH3>
              Back-End:
            </StyledH3>
             Nodejs, NextJs, PHP, Express, MySql, MongoDb, Mongoose.
          </StyledText>
          <a 
            target="_black" 
            href="download/curriculoVinicius.pdf"
            download="curriculoVinicius.pdf"
          >
            <Button text="Baixar Curriculo" />
          </a>
        </StyledContainer>
        <StyledContainer>
          
        </StyledContainer>
      </StyledSection>
    </> 
  )
}

export default Section