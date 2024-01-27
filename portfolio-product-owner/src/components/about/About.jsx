import React, { useState } from 'react';
import "./about.css";
import CV from "../../assets/Dervilon.pdf";
import Info from './Info';

const DownloadButton = () => {
    return (
        <a download="" href={CV} className="button button--flex button-about">
            Télécharger mon CV
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
    );
};

const About = () => {
    const [activeTab, setActiveTab] = useState('description');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="about section" id="about">
            <h2 className="section__title">À propos</h2>

            <div className="about__container container">
                <div className="about__tabs">
                    <button className={`about__tab ${activeTab === 'description' && 'active'}`} onClick={() => handleTabClick('description')}>Information</button>
                    <button className={`about__tab ${activeTab === 'info' && 'active'}`} onClick={() => handleTabClick('info')}>Expériences</button>
                    <button className={`about__tab ${activeTab === 'qualités' && 'active'}`} onClick={() => handleTabClick('qualités')}>Qualités & Défault</button>
                </div>
                
                <div className="about__data">
                    <TabContent activeTab={activeTab} />
                </div>
            </div>
        </section>
    );
};

export default About;

const TabContent = ({ activeTab }) => {

    switch (activeTab) {
        case 'info':
            return (
                <div className="flex-container">
                    <div  className="about__content-container">
                        <div className="about__qualities-block">
                            <p className="about__additional-info">
                                En tant que Product Manager, j'aligne les équipes techniques,
                                de design et business pour développer des produits digitaux centrés
                                sur l'expérience utilisateur. Fort de mon expérience en développement
                                React.js et en design, je facilite les discussions techniques et j'ai
                                piloté avec succès 12 projets, contribuant ainsi à valider mes compétences
                                en tant que Product Manager.
                            </p>
                        </div>
                        <Info />
                    </div>
                    <DownloadButton/>
                </div>
            );
        case 'description':
            return (
                <div >
                    <div className="about__qualities-block-description">
                        <p className="about__description">
                                <span className='span__about'>
                                    De formation initiale en installation en télécommunication, 
                                    j'ai ressenti le besoin de progresser davantage et d'explorer 
                                    d'autres domaines. J'ai suivi différentes formations telles 
                                    que le droit et la communication. J'ai également exercé les 
                                    métiers de préparateur de commandes, cariste et opérateur 
                                    de machines, ce qui m'a permis d'acquérir des compétences 
                                    diverses telles que le travail en équipe et la communication. 
                                    Mes différents parcours m'ont finalement conduit au domaine 
                                    de l'informatique. J'ai d'abord découvert le métier d'UX designer.
                                    Animé par l'envie d'apprendre davantage, je me suis tourné vers le 
                                    développement informatique et me suis orienté vers la gestion de 
                                    projet et le product management.
                                </span>
                        </p>
                    </div>
                    <DownloadButton/>
                </div>
            );
        case 'download':
            return (
                <DownloadButton/>
            );
        case 'qualités':
            return (
                <div>
                <div className="about__qualities">
                    <div className="about__qualities-block appart">
                        <h3>Qualités</h3>
                        <span>
                            <strong>Adaptabilité :</strong> 
                                Mon parcours varié, du développement à la gestion de projet, témoigne de ma capacité à m'adapter à différentes situations.<br/>
                        </span>
                        <span>
                            <strong>Réactivité :</strong> 
                                Mon expérience en tant qu'opérateur sur machine chez Michelin atteste de ma réactivité face aux défis, notamment en cas de panne.<br/>
                        </span>
                        <span><strong>Persevérance :</strong> 
                                Durant ma formation en développement JavaScript React, la persévérance m'a motivé à résoudre des problèmes de code complexes.<br/>
                        </span>
                    </div>
                    <div className="about__qualities-block">
                        <h3>Défauts</h3>
                        <span>
                            <strong> Méticuleux  :</strong> 
                                En ce qui concerne mes défauts, je pourrais être qualifié de méticuleux, car j'ai tendance à prendre le temps nécessaire pour accomplir les tâches de manière précise et m'assurer de leur exactitude.<br/>
                        </span>
                        <span><strong> Introverti :</strong> 
                                Mon point faible est mon caractère introverti, mais cela s'explique par ma volonté de comprendre en profondeur les équipes avec lesquelles je collabore. 
                                Une fois à l'aise, je suis capable de développer une confiance mutuelle et de m'engager pleinement.
                        </span>
                    </div>
                </div>
                <DownloadButton/>
                </div>
            );
        default:
            return null;
    }
};


