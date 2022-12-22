import styled from "styled-components"
import {FaGithub,FaEnvelope,FaWhatsapp} from "react-icons/fa"


const StyledContact = styled.div`
  height: 100vh;

  @media (max-width:700px){
    width: 100%;
    height: 100%;
   // margin-right: 70px;
    margin-bottom: 200px;
  }
`

const StyledTitulo = styled.h2`
  color: white;
  font-size: 35px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 10px;
  gap: 30px;
  color: white;
  font-size: 25px;

  p{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  @media (max-width:700px){
    padding-left: 10px;
    font-size: 18px;
  }
`


function SectionContact(){
  return(
    <StyledContact>   
      <StyledTitulo>Entre em contato</StyledTitulo>
      <StyledContainer>
        <p><FaGithub fontSize="55" /> 
          https://github.com/viniciusgasparino
        </p>
        <p><FaEnvelope fontSize="45"/> 
          Email: vinciusgasparino@yahoo.com.br
        </p>
        <p><FaWhatsapp fontSize="45" color="green"/>
          Whatssap: 11974766267
        </p>
      </StyledContainer>
    </StyledContact>
  )
}

export default SectionContact