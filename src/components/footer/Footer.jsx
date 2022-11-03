import styled from "styled-components"

const StyledFooter = styled.footer`
  text-align: center;
  border-top: 1px solid white;
  padding: 20px 0;
  color: white;
  font-size: 20px;
  height: 50px;
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