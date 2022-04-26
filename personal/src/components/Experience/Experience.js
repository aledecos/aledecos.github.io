import React from 'react'
import classes from './Experience.module.scss';
import suncor from '../../Resources/suncor.png';
import csp from '../../Resources/csp.png';
import Card from './Card';

const suncorWords =() =>{
    let string = 'Assisted Project/Project Managers of a specific tasks force. Converted legacy R and Python statistical/Machine Learning scripts for new platform';
    return string;
}
const cspWords =() =>{
    let string = 'Created internal scheduling Web Application. Tech stack: Frontend - ReactJs, Backend - NodeJs/ExpressJs, Testing - Cypress/Mocha/Chai';
    return string;
}

const Experience = () => {
  return (
    <section className={classes.section} id="experience">
        <div className={classes.section__title}>
            <h1>Experience</h1>
        </div>
        <div className='container-fluid d-flex justify-content-center'>
            <div className='row'>
                <div className='col'>
                    <Card img={suncor} title={'Reliability and Operations Coop Engineer @Suncor'} words={suncorWords()} website={'https://www.suncor.com/en-ca/what-we-do'}/>
                </div>

                <div className='col'>
                    <Card img={csp} title={'Capstone Project Manager @Canadian Ski Patrol'} words={cspWords()} website={'https://www.suncor.com/en-ca/what-we-do'}/>
                </div>

            </div>
        </div>
        
    </section>
  )
}

export default Experience