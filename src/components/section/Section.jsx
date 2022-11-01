import styled from "styled-components"
import Subtitle from "../subtitle/Subtitle"


const StyledSection = styled.section`
  margin-top: 30px;
  padding: 100px 0;
  display: flex;
  width: 100%;
  height: 800px;
`

const StyledContainer = styled.div`
  flex-direction: column;
  margin-left: 100px;
  width: 50%;

  @media (max-width: 1200px){
    width: 100%;
  }
`
 
const StyledText = styled.p`
  color: white;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`


function Section(){
  return(     
    <StyledSection>
      <StyledContainer>
        <Subtitle text="Vinicius"/>
        <StyledText>FullStack Developer</StyledText>
        <StyledText>Lorem ipsum,
           dolor sit amet consectetur adipisicing elit,
           dolor sit amet consectetur adipisicing elit.
        </StyledText>
        <button>dddddd</button>
      </StyledContainer>
      <StyledContainer>
        <img src="" />
      </StyledContainer>
    </StyledSection>
  )
}

export default Section