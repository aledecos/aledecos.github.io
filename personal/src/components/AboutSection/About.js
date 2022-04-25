import React from 'react'
import classes from './About.module.scss';

const About = () => {
  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <div className={classes.column1}>
                <div className={classes.textWrapper}>
                    <p>Topline</p>
                    <h1>Heading</h1>
                    <p>subtext</p>
                </div>
            </div>
            <div className={classes.column2}>
                <div className={classes.imgWrapper}>
                        Image here
                </div>
            </div>
        </div>
    </div>
  )
}

export default About