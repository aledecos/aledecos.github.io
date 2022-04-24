import {React, useState, useEffect} from 'react';
import classes from './Header.module.scss';
import {BiMenuAltRight} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai"

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

  useEffect(() => {
    let listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 120) {
        if (scrollTop !== false) setscrollTop(false)
      } else {
        if (scrollTop !== true) setscrollTop(true)
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollTop]);

  useEffect(() => {
      if (size.width > 768 && menuOpen) {
          setMenuOpen(false);
      }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
          setMenuOpen((p) => !p);
  };

  return (
    <header className={`${classes.header} ${scrollTop ? classes.scroller : ""}`}>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>Joseph Park</h2>
        <nav className={`${classes.header__content__nav} ${menuOpen  ? classes.isMenu : ""}`}>
          <ul>
            <li>
              <a href='/'>Page 1</a>
            </li>
            <li>
              <a href='/'>Page 2</a>
            </li>
            <li>
              <a href='/'>Page 3</a>
            </li>
          </ul>
          <button>CTA Page</button>
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