import React, { useEffect, useState } from 'react';
import "./home.css";
import Button from './Button'; // Composant de bouton réutilisable

const HomeData = () => {
    // Utilisation du hook useState pour gérer l'état scrollPercentage, initialisé à 0
    const [scrollPercentage, setScrollPercentage] = useState(0);

    // Utilisation du hook useEffect pour effectuer une action lors du défilement de la page
    useEffect(() => {
        // Fonction handleScroll appelée à chaque événement de défilement de la page
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollTop = window.scrollY;
            const percentage = (scrollTop / scrollHeight) * 100;
            setScrollPercentage(percentage);
        };

        // Ajout d'un écouteur d'événements de défilement à la fenêtre
        window.addEventListener('scroll', handleScroll);

        // Suppression de l'écouteur d'événements de défilement lorsque le composant est démonté
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // La dépendance est un tableau vide, ce qui signifie que ce code ne s'exécutera qu'une seule fois après le rendu initial

    // Rendu des éléments HTML avec les données personnelles, un bouton de contact et un indicateur de défilement
    return (
        <div className="home_data">
            <h1 className="home_title">
                Kongo Dervilon
            </h1>
            <h3 className="home_subtitle"> Product Owner </h3>
            <p className="home_description">
                Diplômé en gestion de projet et développement web (BAC+5), 
                je suis certifié Scrum Product Owner avec une solide expérience en développement web (HTML, CSS, JavaScript, React.js, Python) 
                et en gestion agile (Scrum, Kanban, Lean). Adaptable, rigoureux et réactif, je m’engage à livrer des produits de qualité répondant aux besoins des clients.
            </p>
            {/* Utilisation du composant Button avec des propriétés pour la personnalisation */}
            <Button href="#contact" buttonText="Contact" />

            {/* Indicateur de défilement */}
            <div className="scroll-indicator-container">
                <div
                    className="scroll-indicator"
                    style={{ width: `${scrollPercentage}%` }} // La largeur de l'indicateur est définie en fonction du pourcentage de défilement
                />
            </div>
        </div>
    );
}

export default HomeData;
