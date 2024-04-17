import React, { useEffect } from 'react';
import './scrollUp.css';

const ScrollUp = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector('.scrollup');
            if (scrollUp) {
                if (window.scrollY >= 560) {
                    scrollUp.classList.add('show-scroll');
                } else {
                    scrollUp.classList.remove('show-scroll');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Nettoyage de l'écouteur d'événements lors du démontage du composant
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Utiliser un tableau vide pour exécuter useEffect une seule fois à l'initialisation

    return (
        <a href="#home" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    );
};

export default ScrollUp;

