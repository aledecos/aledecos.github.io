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
                        <span className={classes.first}>first</span>
                        <span>first</span>
                        <span className={classes.last}>first</span>
                    </div>
                    <p>I want to jazz up a span to highlight text, including adding some padding, but without making any of the text in the div move around. It seems to work by default betw</p>
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