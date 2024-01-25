import React from 'react';
import "./home.css";
import Button from './Button'; // Composant de bouton réutilisable

const HomeData = () => {
    return (
        <div className="home_data">
            <h1 className="home_title">
                M'Bissi Kongo Dervilon
            </h1>
            <h3 className="home_subtitle"> Product Owner </h3>
            <p className="home_description">
                Diplômé en Product Management & Owner,
                passionné par l'alliance entre la technologie et la stratégie
                de produits. Fort d'une expertise technique solide et d'une
                vision stratégique étendue, je recherche activement des
                opportunités dans ce domaine.
            </p>
            {/* Utiliser le composant Button avec des propriétés pour la personnalisation */}
            <Button href="#contact" buttonText="Contact" />
        </div>
    )
}

export default HomeData;
