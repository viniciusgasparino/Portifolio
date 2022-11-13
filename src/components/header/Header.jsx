import Subtitle from "../subtitle/Subtitle"
import styled from "styled-components"
import Link from "next/link"

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
    cursor: pointer;
    font-size: 22px;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`
  
function Header({setMenuIsVisible}){
  return(
    <StyledHeader>
      <StyledLogo>
        <Subtitle text="Vinicius"/>
        <p>Meu Portifolio</p>
      </StyledLogo>
      <StyledUl>    
        <Link href="/"><li>Home</li></Link>    
        <Link href="/Projetos"><li>Projetos</li></Link>
        <Link href="/Contatos"><li>Contatos</li></Link>
        <span onClick={()=>{setMenuIsVisible(true)}}>X</span>
      </StyledUl>
    </StyledHeader>
  )
}

export default Header