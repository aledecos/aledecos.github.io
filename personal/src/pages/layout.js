import React from 'react'
import Welcome from '../components/WelcomeSection/Welcome';
import Header from '../components/Header/Header';
import About from '../components/AboutSection/About';

const layout = () => {
  return (
    <>
        <Header/>
        <section>
            <Welcome/>
        </section>
        <section>
            <About/>
        </section>
    </>
    
  )
}

export default layout