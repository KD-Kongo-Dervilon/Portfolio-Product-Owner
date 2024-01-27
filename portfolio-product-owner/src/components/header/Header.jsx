import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./header.css";
import LogoHeader from "../../assets/LogoFooter.svg";


const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  
  useEffect(() => {
    /*=============== Changement de fond du Header ===============*/
    const handleScroll = () => {
      const header = document.querySelector(".header");

      if (window.scrollY >= 560) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*=============== Toggle Menu ===============*/
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
            <img src={LogoHeader} alt="
              A wolf in a square with kd 
              and below Kongo dervilon on 
              the right a bird" 
                className="nav__logo-header">
            </img>
        </a>

        <div className={classNames("nav__menu", { "show-menu": Toggle })}>
          <ul className="nav__list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? " nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Accueil
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> À propos
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Compétences
              </a>
            </li>
            <li className="nav_item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Savoir-Faire
              </a>
            </li>
            <li className="nav_item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
        </div>
        
        <div className={classNames("nav__toggle", { cross: Toggle, closed: !Toggle })} onClick={() => showMenu(!Toggle)}>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
