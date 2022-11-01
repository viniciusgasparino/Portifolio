import styled from "styled-components"


const StyledButton = styled.button`
  border: none;
  width: 100px;
  cursor: pointer;
  height: 40px;
  color: green;
  font-Weight: bold;
  border-Radius: 10px;
`
 
function Button({text}){
  return(
    <>
      <StyledButton>
        {text}
      </StyledButton>
    </>
  )
}


export default Button