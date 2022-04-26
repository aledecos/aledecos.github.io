import React from 'react'
import Welcome from '../components/WelcomeSection/Welcome';
import Header from '../components/Header/Header';
import About from '../components/AboutSection/About';
import Interests from '../components/Interests/Interests';
import Experience from '../components/Experience/Experience';
import Footer from '../components/Footer/Footer';

const layout = () => {
  return (
    <>
        <Header/>
        <Welcome/>
        <About />
        <Interests/>
        <Experience/>
        <Footer/>
    </>
    
  )
}

export default layout