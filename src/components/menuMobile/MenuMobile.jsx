import styled,{ css } from "styled-components"
import Link from "next/link"
import {useEffect} from "react"

const StyledContainer = styled.div`
  position: absolute;
  backdrop-filter: blur(3px);
  width:100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(17,18,17,0.95);
  background: linear-gradient(34deg, rgba(25,88,24,0.95) 0%, rgba(17,18,17,0.95) 95%);
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: .5s;
  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: .7s;
  }

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);
    > svg {
      transform: rotate(0deg);
    }
    nav {
      transform: scale(1);
    }
  `}
  
`

function MenuMobile({menuIsVisible,setMenuIsVisible}){
  useEffect(()=>{
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  },[menuIsVisible])

  return(
    <StyledContainer isVisible={menuIsVisible}>
      <span onClick={()=>{setMenuIsVisible(false)}}>X</span>
      <nav>    
        <Link href="/"><li>Home</li></Link>    
        <Link href="/Projetos"><li>Projetos</li></Link>
        <Link href="/Contatos"><li>Contatos</li></Link>
      </nav>
    </StyledContainer>
  )
}

export default MenuMobile