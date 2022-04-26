import React from 'react'
import classes from './About.module.scss';
import img from '../../Resources/guyHoldingPaper.svg';
import schulich from '../../Resources/schulich.png';

const About = () => {
  return (
    <section className={classes.section} id="about">
        <div className={classes.section__wrapper}>
            <div className={classes.section__wrapper__column1}>
                <div className={classes.section__wrapper__column1__textWrapper}>
                    <h1>About Me</h1>
                    <div className={classes.section__wrapper__column1__textWrapper__spanWrapper}>
                        <span className={classes.first}>University of Calgary</span>
                        <span>B.S Software Engineering</span>
                    </div>
                    <p>I am a Software Engineering Graduate from the University of Calgary. I also live in Calgary! My interests include learning Jazz on the piano, 3D printing, Arduino Projects, and Electronics Projects</p>
                </div>
                <div className={classes.section__wrapper__column1__imgWrapper}>
                    <img src={schulich} alt='uni'/>
                </div>
            </div>
            <div className={classes.section__wrapper__column2}>
                <div className={classes.section__wrapper__column2__imgWrapper}>
                        <img src={img} alt='side'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About