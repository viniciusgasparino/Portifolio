import styled from "styled-components"
import Button from "../src/components/button/Button"


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
  margin-bottom: 50px;
`

function Projetos(){
  return(
    <>
      <StyledTitulo>Meus projetos</StyledTitulo>  
      <StyledContainer>
        <StyledCard>
          <h3>Jogo da Velha</h3>
          <p>oooo oooo ddddasd dadadad</p>
          <Button text="sssss"/>
        </StyledCard>
        <StyledCard>
          <h3>Social Dev</h3>
          <p>oooo oooo dadad  dasdad adasdad</p>
          <Button text="sssss"/>
        </StyledCard>
        <StyledCard>
          <h3>Social Dev</h3>
          <p>oooo oooo dada dadada dadad dadad</p>
          <Button text="sssss"/>
        </StyledCard>
      </StyledContainer>
    </>
  )
}


export default Projetos