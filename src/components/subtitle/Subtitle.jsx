import styled from "styled-components"


const StyledH2 = styled.h2`
  color: white;
  font-size: 35px;
`

function Subtitle({text,...props}){
  return(
    <StyledH2 {...props}>
      {text}
    </StyledH2>
  )
}



export default Subtitle