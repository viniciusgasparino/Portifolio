import styled from "styled-components"
import Header from "../src/components/header/Header"
import Footer from "../src/components/footer/Footer"
import MenuMobile from "../src/components/menuMobile/MenuMobile"
import {useState} from "react"


const StyledContact = styled.div`
  height: 700px; 
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 40px;
  gap: 30px;
  color: white;
  font-size: 25px;
`

const StyledTitulo = styled.h2`
  color: white;
  font-size: 35px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`

function Contatos(){
  const [menuIsVisible,setMenuIsVisible] = useState(false)

  return(
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible}/>
      <StyledContact>   
        <StyledTitulo>Entre em contato</StyledTitulo>
        <StyledContainer>
          <p><span>Icon</span> Lorem ipsum dolor sit amet, consectetur adipisicing</p>
          <p><span>Icon</span> Email: vinciiusgasparino@yahoo.com.br</p>
          <p><span>Icon</span> Whatssap: 11974766267</p>
        </StyledContainer>
      </StyledContact>
      <Footer/>
    </>
  )
}

export default Contatos