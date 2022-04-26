import React from 'react'
import classes from './Welcome.module.scss';
import linkedinLogo from './../../Resources/linkedInLogo.png';
import { HashLink as Link } from 'react-router-hash-link';

const Welcome = () => {
  return (
    <section className={classes.section} id="top">
        <div className={classes.section__title}>
                <h1>
                    Welcome
                </h1>
                <span>
                    <Link className={classes.primary} to="/#contact">Contact</Link>
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