import React from 'react';
import "./footer.css";
import LogoFooter from "../../assets/LogoFooter.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__logo--container">
                    {/* Utilisation de la balise <img> avec alt pour l'accessibilité */}
                    <img src={LogoFooter} alt="Logo Footer" className="logo__footer" />
                </div>

                {/* Utilisation d'une liste <ul> pour la navigation */}
                <ul className="footer__list">
                    {[
                        { label: "À propos", href: "#about" },
                        { label: "Projet", href: "#portfolio" },
                        { label: "Compétences", href: "#services" }
                    ].map((item, index) => (
                        <li key={index}>
                            {/* Utilisation de <a> pour les liens avec href */}
                            <a href={item.href} className="footer__link">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Utilisation de &copy; pour le symbole de copyright */}
                <span className="footer__copy">&copy; KD Kongo Dervilon réservé</span>
            </div>
        </footer>
    );
}

export default Footer;
