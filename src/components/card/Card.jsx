import styled from "styled-components"
import Button from "../button/Button"


const StyledCard = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  margin-bottom: 20px;
  width: 300px;
  gap: 10px;
  border: 3px solid white;
  padding: 0 30px;
`

const StyledH3 = styled.h3`
  color: lightgreen;
  font-size: 25px;
`

const StyledText = styled.p`
  color: white;
  font-size: 18px;
  margin: 10px 0;
  text-align: center;
`

const StyledLink = styled.a`
  color: #edb55c;
  text-decoration: none;
  font-size: 17px;
  font-weight: bold;

  :hover{
    color: #85570d;
    transition: 0.5;
  }
`

function Card({projeto,descricao,site,codigo}){
  return(
    <>
      <StyledCard>
        <StyledH3>{projeto}</StyledH3>
        <StyledText>{descricao}</StyledText>
        <a 
          target="_black" 
          href={site}>
          <Button text="Ver projeto"/>
        </a>
        <StyledLink target="_black" href={codigo}>Ver código</StyledLink>
      </StyledCard>
    </>
  )
}


export default Card