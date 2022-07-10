import React from 'react'
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import Detail from './Detail';
import Contactus from './Contactus';
import Aboutus from './Aboutus';
const MainPage = () => {
  return (
    <div>
        <NavBar/>
        <Header/>
        <Detail/>
        <Footer/>    
        <Contactus/>
        <Aboutus/>
    </div>
  )
}

export default MainPage