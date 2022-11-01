import styled from "styled-components"

const StyledSection = styled.section`
  background-color: red;
  padding: 100px 0;
  display: flex;
  width: 100%;
  height: 500px;
`

const StyledContainer = styled.div`
  flex-direction: column;
  margin-left: 100px;
  width: 50%;

  @media (max-width: 1200px){
    width: 100%;
  }
` 

function Section(){
  return(     
    <StyledSection>
      <StyledContainer>
        <h1>Vinicius</h1>
        <p>FullStack Developer</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <button>dddddd</button>
      </StyledContainer>
      <StyledContainer>
        <img src="" />
      </StyledContainer>
    </StyledSection>
  )
}

export default Section