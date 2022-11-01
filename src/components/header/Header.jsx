import Subtitle from "../subtitle/Subtitle"
import styled from "styled-components"



const StyledHeader = styled.header`
  height: 90px;
  display: flex;
  align-items: center;
  padding: 0 100px;
  gap:20px;
  color: white;
  border-bottom: 1px solid white;
`

const StyledLogo = styled.div`
  flex: 1;
  margin-left: -50px;

  h2{
    font-size: 35px;
  }

  span{
    font-size: 20px;
  }
`

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;

  li{
    list-style-type: none;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`

const StyledMenu = styled.a`
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`    

function Header(){
  return(
    <StyledHeader>
      <StyledLogo>
        <Subtitle text="Vinicius"/>
        <p>Meu Portifolio</p>
      </StyledLogo>
      <StyledUl>    
        <li><StyledMenu>Home</StyledMenu></li>    
        <li><StyledMenu>Projetos</StyledMenu></li>
        <li><StyledMenu>Contatos</StyledMenu></li>
      </StyledUl>
    </StyledHeader>
  )
}

export default Header