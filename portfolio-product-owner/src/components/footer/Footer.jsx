import React from 'react';
import "./footer.css";
import LogoFooter from "../../assets/LogoFooter.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__logo--container">
                    <img src={LogoFooter} alt="Logo Footer" className="logo__footer"></img>
                </div>

                <ul className="footer__list">
                    {[
                        { label: "À propos", href: "#about" },
                        { label: "Projet", href: "#portfolio" },
                        { label: "Compétences", href: "#services" }
                    ].map((item, index) => (
                        <li key={index}>
                            <a href={item.href} className="footer__link">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <span className="footer__copy">&#169; KD Kongo Dervilon réservé</span>
            </div>
        </footer>
    );
}

export default Footer;