import React from 'react'
import classes from './Welcome.module.scss';
import linkedinLogo from './../../Resources/linkedInLogo.png';

const Welcome = () => {
  return (
    <section className={classes.section}>
        <div className={classes.section__title}>
                <h1>
                    Welcome
                </h1>
                <span>
                    <a className={classes.primary} href='/about'>About Me</a>
                </span>
                <span>
                    <a className={classes.secondary} href='https://www.linkedin.com/in/joseph-park-3b985b116/' target="_blank" rel="noopener noreferrer"> 
                        <img src={linkedinLogo} alt='linkedIn'/>
                        LinkedIn
                    </a>
                </span>
        </div>
    </section>
  )
}
export default Welcome