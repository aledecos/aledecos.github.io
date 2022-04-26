import React from 'react'
import classes from './Footer.module.scss';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <section className={classes.section} id="contact">
        <div className={classes.section__footerWrap}>
            <div className={classes.section__footerWrap__footerLinksContainer}>
                <div className={classes.section__footerWrap__footerLinksContainer__footerLinksWrapper}>
                    <div className={classes.section__footerWrap__footerLinksContainer__footerLinksWrapper__footerLinksItem}>
                        <h1>
                            By
                        </h1>
                        <a>Joseph Park</a>
                    </div>
                    <div className={classes.section__footerWrap__footerLinksContainer__footerLinksWrapper__footerLinksItem}>
                        <h1>
                            Contact
                        </h1>
                        <a href="mailto: josephparksoftware@gmail.com" alt='mail'>Email</a>
                        <Link to="/#contact">Phone (N/A)</Link>
                    </div>
                    <div className={classes.section__footerWrap__footerLinksContainer__footerLinksWrapper__footerLinksItem}>
                        <h1>
                            Social
                        </h1>
                        <a href='https://www.linkedin.com/in/joseph-park-3b985b116/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href='https://github.com/aledecos?tab=repositories' target="_blank" rel="noopener noreferrer" >Github</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer