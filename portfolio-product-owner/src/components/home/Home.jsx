import React from 'react';
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_content grid">
                    {/* Utilisation des composants Social et Data pour la réutilisation du code */}

                    <Social />
                    <div className="home_img"></div>
                    <Data />
                </div>
                
                {/* Utilisation du composant ScrollDown avec des propriétés pour la personnalisation */}
                <ScrollDown targetId="about" buttonText="Scroll Down" />
            </div>
        </section>
    )
}

export default Home;
