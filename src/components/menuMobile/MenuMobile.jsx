import styled from "styled-components"
import Link from "next/link"


const StyledMenuMobile = styled.ul`
  display: none;
  height: 220px;
  position: absolute;
  bottom: 0;
  top: 190px;
  right: 0;
  left: 0;
  z-index: 4;
  background-color: black;
  transition: 0.7s; 
  

  @media (max-width: 700px){
    display: flex;
    flex-direction: column;
    
    li{
      list-style-type: none;
      cursor: pointer;
      font-size: 22px;
      text-align:center;
      font-weight: bold;
      color: white;
      text-decoration: none;
      margin-top: 30px;
      border-bottom: 1px solid;
    }
  
    li:hover{
      color: #9f9797;
      transition: 0.4s; 
    }
  }
`
  function MenuMobile(){
    return(
    <StyledMenuMobile>
      <Link href="/"><li>Home</li></Link>    
      <Link href="/Projetos"><li>Projetos</li></Link>
      <Link href="/Contatos"><li>Contatos</li></Link>
    </StyledMenuMobile>  
    )
  }

export default MenuMobile



