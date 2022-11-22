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
            site = "https://social-dev-six.vercel.app/Login"
            codigo = "https://github.com/viniciusgasparino/social-dev"
          />
          <Card
            projeto = "Jogo da Velha"
            descricao = "lorem impsum lorem ipsum"
            site = "https://react-jogo-da-velha-flame.vercel.app/"
            codigo = "https://github.com/viniciusgasparino/react-jogo-da-velha"
          />
          <Card
            projeto = "Calculadora"
            descricao = "lorem impsum lorem ipsum"
            site = "https://calculadora-one-puce.vercel.app/"
            codigo= "https://github.com/viniciusgasparino/calculadora"
          />
          <Card
            projeto = "Hotel Next"
            descricao = "lorem impsum lorem ipsum"
            site = "https://hotelnext.vercel.app/"
            codigo = "https://github.com/viniciusgasparino/Hotel_Next"
          />
          <Card
            projeto = "Lista de Tarefas"
            descricao = "lorem impsum lorem ipsum"
            site = "https://todolist-flame-seven.vercel.app/"
            codigo = "https://github.com/viniciusgasparino/todoList"
          />
        </StyledContainer>
      </StyledCenter>  
    </>
  )
}


export default SectionProject