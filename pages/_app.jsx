import { createGlobalStyle } from "styled-components"

const GlobaLStyle = createGlobalStyle`
  *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
              
  body{
    font-family: 'Roboto',sans-serif;
    background-color: #0e0c11;
  }
`

function App({Component,pageProps}){
  return(
    <>
      <GlobaLStyle />
      <Component {...pageProps} />
    </>
  )
}


export default App