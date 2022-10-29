import styled from "styled-components"

const StyledHeader = styled.header`
  display: flex;
  min-height: 70px;
  background-color: red;
  width: 100%;
  gap: 100px;
`

const StyledContainer = styled.div`
  width: 50%;
  flex-direction: column;
  background-color: yellowgreen;
  align-items: center;
  justify-content: center;
`

const StyledMenu = styled.ul`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 21px;
`

const StyledLi = styled.li`
  flex-direction: column;
  list-style-type: none;
  font-size: 25px;
  font-weight: bold;
`



function Header(){
  return(
    <StyledHeader>
      <StyledContainer>
        <h2>Vinicius</h2>
        <h3>Meu portifolio</h3>
      </StyledContainer>
      <StyledContainer>
        <StyledMenu>
          <StyledLi>Home</StyledLi>
          <StyledLi>Projetos</StyledLi>
          <StyledLi>Contato</StyledLi>
        </StyledMenu>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header