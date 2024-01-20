import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">KD</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">
                            à propos
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

                <div className="footer__social">
                    <a href="https://www.facebook.com/?locale=fr_FR" 
                    className="footer_social-icon" 
                    target="_blank" 
                    rel="noreferrer">
                        <i class='bx bxl-facebook-circle'></i>
                    </a>

                    <a href="https://www.youtube.com/" 
                    className="footer_social-icon youtube" 
                    target="_blank" 
                    rel="noreferrer">
                        <i class="uil uil-youtube"></i>
                    </a>

                    <a href="https://www.twitch.tv/" 
                    className="footer_social-icon twitch" 
                    target="_blank" 
                    rel="noreferrer">
                        <i class='bx bxl-twitch'></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; KD Kongo Dervilon reserved</span>
            </div>
        </footer>
    )
}

export default Footer
