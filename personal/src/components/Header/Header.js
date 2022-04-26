import {React, useState, useEffect} from 'react';
import classes from './Header.module.scss';
import {BiMenuAltRight} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai"
import { HashLink as Link } from 'react-router-hash-link';


const Header = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollTop, setscrollTop] = useState(true);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  //auto adjust with window size
  useEffect(() => {
      const handleResize = () => {
          setSize({
              width: window.innerWidth,
              height: window.innerHeight,
          });
      };
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
  }, []);
  //scroll to top header lookout
  useEffect(() => {
    let listener = document.addEventListener("scroll", e => {
      let scrolled = document.scrollingElement.scrollTop;
      if(size.width >= 800)
      {
        if (scrolled >= 500) {
          if (scrollTop !== false){setscrollTop(false); console.log();} 
        } else {
          if (scrollTop !== true){setscrollTop(true); console.log();}
        }
      }else{
        if (scrolled >= 100) {
          if (scrollTop !== false){setscrollTop(false); console.log();} 
        } else {
          if (scrollTop !== true){setscrollTop(true); console.log();}
        }
      }
      
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollTop, size]);

  //setting menu on and off && disable scroll while menu is up
  useEffect(() => {
      if (size.width > 800 && menuOpen) {
          setMenuOpen(false);
      }
      if(menuOpen)
      {
        document.body.style.overflow = "hidden"
      }else{
        document.body.style.overflow = "scroll"
      }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
          setMenuOpen((p) => !p);
  };

  return (
    <header className={`${classes.header} ${scrollTop ? classes.scroller : ""}`}>
      <meta content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no' name='viewport'></meta>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>Joseph Park</h2>
        <nav className={`${classes.header__content__nav} ${menuOpen  ? classes.isMenu : ""}`}>
          <ul>
            <li>
              <Link to="/#top" onClick={() => setMenuOpen(false)}>Beginning</Link>
            </li>
            <li>
              <Link to="/#about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/#Knowledge" onClick={() => setMenuOpen(false)}>Knowledge</Link>
            </li>
            <li>
              <Link to="/#experience" onClick={() => setMenuOpen(false)}>Experience</Link>
            </li>
            <li>
              <Link to="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className={classes.header__content__toggle}>
            {!menuOpen ? (
              <BiMenuAltRight onClick={menuToggleHandler} />
              ) : (
              <AiOutlineClose onClick={menuToggleHandler} />
            )}
        </div>
      </div>
      
    </header>
    
  )
}

export default Header