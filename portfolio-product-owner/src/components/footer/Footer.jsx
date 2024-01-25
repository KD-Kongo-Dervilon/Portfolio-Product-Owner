import React from 'react';
import "./footer.css";
import LogoFooter from "../../assets/LogoFooter.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
        
                <div className="footer__logo--container">
                    <img src={LogoFooter} alt="" className="logo__footer"></img>
                </div>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">
                            À propos
                        </a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">
                            Projet
                        </a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">
                            Compétences
                        </a>
                    </li>
                </ul>

                <span className="footer__copy">&#169; KD Kongo Dervilon reserved</span>
            </div>
        </footer>
    )
}

export default Footer
