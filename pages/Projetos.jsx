import styled from "styled-components"


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

function Projetos(){
  return(
    <>
      <h1>Meus projetos</h1>  
      <StyledContainer>
        <StyledCard>
          <h3>Jogo da Velha</h3>
          <p>oooo oooo ddddasd dadadad</p>
          <button>Ver projeto</button>
        </StyledCard>
        <StyledCard>
          <h3>Social Dev</h3>
          <p>oooo oooo dadad  dasdad adasdad</p>
          <button>Ver projeto</button>
        </StyledCard>
        <StyledCard>
          <h3>Social Dev</h3>
          <p>oooo oooo dada dadada dadad dadad</p>
          <button>Ver projeto</button>
        </StyledCard>
      </StyledContainer>
    </>
  )
}


export default Projetos