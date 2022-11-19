import styled from "styled-components"
import Card from "../card/Card"

const StyledTitulo = styled.h2`
  color: white;
  font-size: 35px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`

const StyledCenter = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 800px;
  padding: 20px 0;
  
  @media (max-width:700px){
    flex-direction: column;
    align-items:center;
    gap: 20px;
    height: 100%;
    margin-bottom: 30px;
  }
`


function SectionProject(){
  return(
    <>
      <StyledTitulo>Meus projetos</StyledTitulo> 
      <StyledCenter>
        <StyledContainer>
        <Card
            projeto = "Social Dev"
            descricao = "lorem impsum lorem ipsum"
            site = "http://localhost:3000/Projetos"
            codigo= "#"
          />
          <Card
            projeto = "Jogo da Velha"
            descricao = "lorem impsum lorem ipsum"
            site = "www.google.com"
            codigo= "#"
          />
          <Card
            projeto = "Calculadora"
            descricao = "lorem impsum lorem ipsum"
            site = "www.google.com"
            codigo= "#"
          />
          <Card
            projeto = "Hotel Next"
            descricao = "lorem impsum lorem ipsum"
            site = "www.google.com"
            codigo= "#"
          />
          <Card
            projeto = "Lista de Tarefas"
            descricao = "lorem impsum lorem ipsum"
            site = "www.google.com"
            codigo= "#"
          />
        </StyledContainer>
      </StyledCenter>  
    </>
  )
}


export default SectionProject