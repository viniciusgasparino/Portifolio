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
    height: 100vh;

  @media (max-width:700px){
    width: 100%;
    height: 100%;
  }
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
            descricao = "Uma rede social parecida com twiter, com o frontend feito em NextJs e StyledComponents e o backend feito com NextJs usando MongoDb para conectar com banco de dados"
            site = "https://social-dev-six.vercel.app/Login"
            codigo = "https://github.com/viniciusgasparino/social-dev"
          />
          <Card
            projeto = "Jogo da Velha"
            descricao = "Jogo da velha tradicional feito com reactJs e NextJs, usando as melhores práticas de desenvolvimento FrontEnd e Lógica de Programaçao."
            site = "https://react-jogo-da-velha-flame.vercel.app/"
            codigo = "https://github.com/viniciusgasparino/react-jogo-da-velha"
          />
          <Card
            projeto = "Calculadora"
            descricao = "Uma calculadora online,que faz operações básicas feita em reactJs"
            site = "https://calculadora-one-puce.vercel.app/"
            codigo= "https://github.com/viniciusgasparino/calculadora"
          />
          <Card
            projeto = "Hotel Next"
            descricao = "Uma página de vendas que divulga os serviços de um hotel. O projeto inicial foi feito durante o curso usando Html e Css, mas eu converti ele todo em ReactJs com Styled-Components."
            site = "https://hotelnext.vercel.app/"
            codigo = "https://github.com/viniciusgasparino/Hotel_Next"
          />
          <Card
            projeto = "Lista de Tarefas"
            descricao = "Um app online para listar tarefas do dia a dia,feito em ReactJs"
            site = "https://todolist-flame-seven.vercel.app/"
            codigo = "https://github.com/viniciusgasparino/todoList"
          />
        </StyledContainer>
      </StyledCenter>  
    </>
  )
}


export default SectionProject