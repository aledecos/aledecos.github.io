import React from 'react'
import classes from './Interests.module.scss';
import img from '../../Resources/pairprogramming.svg';
import react from '../../Resources/reacticon.png';

const Interests = () => {
  return (
    <section className={classes.section} id="Knowledge">
        <div className={classes.section__wrapper}>
            <div className={classes.section__wrapper__column1}>
                <div className={classes.section__wrapper__column1__textWrapper}>
                    <h1>Knowledge</h1>
                    <div className={classes.section__wrapper__column1__textWrapper__spanWrapper}>
                        <span className={classes.first}>Frontend</span>
                        <span>Backend</span>
                        <span className={classes.last}>Development</span>
                    </div>
                    <p>I have experience in ReactJs, NodeJs, ExpressJs, Javascript, CSS, Sass, Java, Python <br/> I am familiar with R, C#</p>
                </div>
                <div className={classes.section__wrapper__column1__imgWrapper}>
                    <img src={react} alt='react'/>
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

export default Interests