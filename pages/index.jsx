import Header from "../src/components/header/Header"
import Section from "../src/components/section/Section"
import Footer from "../src/components/footer/Footer"
import MenuMobile from "../src/components/menuMobile/MenuMobile"
import {useState} from "react"



function HomePage(){
  const [menuIsVisible,setMenuIsVisible] = useState(false)

  return(
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible}/>
      <Section/>
      <Footer/>
    </>
  )
}


export default HomePage