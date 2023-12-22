import React from 'react';
import "./about.css";
import AboutImg from "../../assets/IMG_0513.JPG";
import CV from "../../assets/cv.pdf";
import Info from './Info';

const About = () => {
    return (
        <div>
            <section className="about section" id="about">
                <h2 className="section__title">À propos</h2>
                <span className="section__subtitle">Présentation</span>
                <div className="about__container container grid">
                    <img src={AboutImg} alt="" className="about__img"></img>
                    <div className="about__data">
                        <Info/>
                        <p className="about__description">
                            En tant que Product Manager, j'aligne les équipes techniques,
                            de design et business pour développer des produits digitaux centrés
                            sur l'expérience utilisateur. Fort de mon expérience en développement 
                            React.js et en design, je facilite les discussions techniques et j'ai 
                            piloté avec succès 12 projets, contribuant ainsi à valider mes compétences 
                            en tant que Product Manager.
                        </p>
                        <a download ="" href={CV} className="button button--flex button-about">
                            Télécharger CV
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 101 101" width="42px"  className="hello" height="42px" fill="#fff" id="file"><path 
                                d="M77.4 16.4H37.1c-.2 0-.4 0-.6.1h-.1c-.2.1-.3.1-.5.2-.1 0-.1.1-.2.1-.2.1-.3.3-.5.4L21.8 
                                33.1c-.2.2-.3.4-.4.7 0 .1 0 .2-.1.2 0 .2-.1.3-.1.5v47.6c0 1.3 1.1 2.4 2.4 
                                2.4h53.8c1.3 0 2.4-1.1 2.4-2.4V18.8c0-1.3-1.1-2.4-2.4-2.4zm-42.7 
                                9v6.9h-5.9l5.9-6.9zM75 79.8H26V37.1h11c1.3 0 2.4-1.1 2.4-2.4V21.2H75v58.6z">
                                </path><path d="M33.2 42.3c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4h34.7c1.3 
                                0 2.4-1.1 2.4-2.4 0-1.3-1.1-2.4-2.4-2.4H33.2zM67.8 53.9H33.2c-1.3 0-2.4 1.1-2.4 2.4 
                                0 1.3 1.1 2.4 2.4 2.4h34.7c1.3 0 2.4-1.1 2.4-2.4-.1-1.3-1.1-2.4-2.5-2.4z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
