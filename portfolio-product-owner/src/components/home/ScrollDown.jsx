import React from 'react';

const ScrollDown = ({ targetId = "about", buttonText = "Scroll Down" }) => {
    return (
        <div className="home_scroll">
            {/* Utilisation de la propriété targetId pour définir la cible du lien */}
            
            <a href={`#${targetId}`} className="home_scroll-button button--flex">
                {/* Utilisation d'une balise <span> pour le texte du bouton, améliore l'accessibilité */}
                <svg className="home_scroll-mouse wheel" xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="scroll">
                    <path fill="none" d="M0 0h48v48H0z"></path>
                    <path d="M24 11.66 30.34 18l2.83-2.83L24 6l-9.17 9.17L17.66 18 24 11.66zm0 24.68L17.66 30l-2.83 2.83L24 42l9.17-9.17L30.34 30 24 36.34z"></path>
                </svg>
                
                {/* Utilisation de la propriété buttonText pour définir le texte du bouton */}
                <span className="home_scroll-name"> {buttonText} </span>
            </a>
        </div>
    );
}

export default ScrollDown;
