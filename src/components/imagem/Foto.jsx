import styled from "styled-components"


const StyledImagem = styled.img`
  width: 100%;
  object-fit: cover;
  max-width: ${props => props.width};
  

  @media (max-width: 768px){
    object-fit: cover;
    min-height: 250px;
  }
`


function Foto({img,width}){
  return(
    <>
      <StyledImagem src={img} width={width}/>                            
    </>
  )
}

export default Foto