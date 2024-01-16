import React, { useState } from 'react';
import './header.css';

const Header = () => {
        /*=============== change backround  Header ===============*/
    window.addEventListener("scroll",function() {
        const header = document.querySelector(".header");

        // when the scroll is higher than 200 viewport height, add the
        //scroll-header class to à tag with the header tag 
        if (this.scrollY >= 560) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    /*=============== Toggle Menu ===============*/
    const[Toggle,showMenu] = useState(false);
    const [activeNav , setActiveNav] = useState("#home");

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">KD</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"} >
                    <ul className="nav__list grid">
                        <li className="nav_item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? " nav__link active-link" : "nav__link"}>
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

                    <i class="uil uil-times nav_close" onClick={() => showMenu (!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu (!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;