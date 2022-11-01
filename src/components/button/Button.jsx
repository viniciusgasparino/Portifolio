import styled from "styled-components"


const StyledButton = styled.button`
  border: none;
  width: 150px;
  background-color: #5e35b1;
  cursor: pointer;
  height: 50px;
  color: white;
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