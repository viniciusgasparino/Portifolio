import styled from "styled-components"

const StyledFooter = styled.footer`
  text-align: center;
  border-top: 1px solid white;
  height: 80px;
  color: white;
  font-size: 20px;
  padding: 20px;
`

function Footer(){
  return(
    <>
      <StyledFooter>
        <p>Criado por Vinicius Gasparino</p>
      </StyledFooter>
    </>
  )
}

export default Footer