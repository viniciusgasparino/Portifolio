import Subtitle from "../subtitle/Subtitle"
import styled from "styled-components"
import Link from "next/link"

const StyledHeader = styled.header`
  height: 90px;
  display: flex;
  align-items: center;
  padding: 0 100px;
  gap:20px;
  background-color: #131116;
  color: white;
  
  @media (max-width: 700px){
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 30px 0;
  }
`

const StyledLogo = styled.div`
  flex: 1;
  margin-left: -50px;

  p{
    font-size: 19px;
  }

  @media (max-width: 700px){
    margin-bottom: 30px;
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
  
  li:hover{
    color: #9f9797;
    transition: 0.4s; 
  }

`

function Header(){
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
      </StyledUl>
    </StyledHeader>
  )
}

export default Header