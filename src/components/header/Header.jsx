import Subtitle from "../subtitle/Subtitle"
import styled from "styled-components"
import Link from "next/link"
import {BsList,BsXLg} from "react-icons/bs"
import {useState} from "react"

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
    margin-left: 0px;
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

  @media (max-width: 700px){
    display: none;
  }
`
const StyledMobile = styled.nav`
  display: none;

  @media (max-width: 700px){
    display: flex;
    flex-direction: column;
   
    li{
      list-style-type: none;
      cursor: pointer;
      font-size: 22px;
      font-weight: bold;
      color: white;
      text-decoration: none;
      margin-top: 30px;
    }
  
    li:hover{
      color: #9f9797;
      transition: 0.4s; 
      background-color: white;
      width: 100%;
    }
  } 
`

const menuMobile = styled.ul`
  display: none;

  @media (max-width: 700px){
    display: flex;
    flex-direction: column;
    height: 500px;
    background-color: black;
  }
`
    
function Header(){
  const [open,setOpen] = useState(false)

  const handleClick = () => {
    if(!open) {
      setOpen(true)
    }else{
      setOpen(false)
    } 
  }

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

      <StyledMobile>
      {
        !open ? 
          <BsList 
            cursor="pointer" 
            onClick={handleClick}
            fontSize="40px"
          /> 
        : 
          <BsXLg 
            cursor="pointer" 
            onClick={handleClick}
            fontSize="40px"
          />
      }
      {
        open ? 
        <menuMobile>
          <Link href="/"><li>Home</li></Link>    
          <Link href="/Projetos"><li>Projetos</li></Link>
          <Link href="/Contatos"><li>Contatos</li></Link>
        </menuMobile>
        : null
      }
      </StyledMobile>
      
    </StyledHeader>
  )
}

export default Header