import React, { useState } from 'react';
import "./about.css";
import Info from './Info';
import CV from "../../assets/CV-product_owner-Mbissi-dervilon.pdf";

const DownloadButton = () => {
    const handleDownload = () => {
        window.open(CV, '_blank');
    };

    return (
        <button className="button button--flex button-about" onClick={handleDownload}>
            Télécharger mon CV
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" width="42px"  className="hello" height="42px" fill="#fff" id="file">
                <path d="M77.4 16.4H37.1c-.2 0-.4 0-.6.1h-.1c-.2.1-.3.1-.5.2-.1 0-.1.1-.2.1-.2.1-.3.3-.5.4L21.8 33.1c-.2.2-.3.4-.4.7 0 .1 0 .2-.1.2 0 .2-.1.3-.1.5v47.6c0 1.3 1.1 2.4 2.4 2.4h53.8c1.3 0 2.4-1.1 2.4-2.4V18.8c0-1.3-1.1-2.4-2.4-2.4zm-42.7 9v6.9h-5.9l5.9-6.9zM75 79.8H26V37.1h11c1.3 0 2.4-1.1 2.4-2.4V21.2H75v58.6z"/>
                <path d="M33.2 42.3c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4h34.7c1.3 0 2.4-1.1 2.4-2.4 0-1.3-1.1-2.4-2.4-2.4H33.2zM67.8 53.9H33.2c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4h34.7c1.3 0 2.4-1.1 2.4-2.4-.1-1.3-1.1-2.4-2.5-2.4z"/>
            </svg>
        </button>
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
                    {['description', 'info', 'qualités'].map(tab => (
                        <button key={tab} className={`about__tab ${activeTab === tab && 'active'}`} onClick={() => handleTabClick(tab)}>
                            {tab === 'info' ? 'Expériences' : tab === 'qualités' ? 'Qualités' : 'À propos de moi'}
                        </button>
                    ))}
                </div>
                
                <div className="about__data">
                    <TabContent activeTab={activeTab} />
                </div>
            </div>
        </section>
    );
};

const TabContent = ({ activeTab }) => {
    const shouldShowDownloadButton = activeTab === 'description' || activeTab === 'info' || activeTab === 'qualités';

    return (
        <div>
            {activeTab === 'info' && (
                <div className="flex-container">
                    <div  className="about__content-container">
                        <div className="about__qualities-block ">
                            <p className="about__additional-info">
                                "Avec une expérience variée et enrichissante, 
                                je propose une perspective solide et une valeur ajoutée à toute équipe ou entreprise. 
                                Formé en tant que Product Manager, 
                                je suis efficace dans la collaboration avec des équipes multidisciplinaires. 
                                En tant que Développeur JavaScript React, 
                                je me concentre sur la conception d'interfaces utilisateur de qualité et j'ai acquis une expertise en méthodologies Agile et Scrum. 
                                Mon expérience chez Michelin a renforcé mes compétences en gestion opérationnelle et en qualité. 
                                Je suis prêt à contribuer de manière significative en tant que Product Manager ou Owner."
                            </p>
                        </div>
                        <Info />
                    </div>
                </div>
            )}

            {activeTab === 'description' && (
                <div className="about__qualities-block-description">
                    <p className="about__description">
                        <span className='span__about'>
                            Je suis passionné par l'innovation et la création de produits digitaux impactants. 
                            Ma rigueur et ma précision me permettent d'éviter les erreurs tout en maintenant un haut niveau de qualité dans mes projets. 
                            Je suis ouvert aux idées et aux feedbacks, favorisant ainsi un environnement collaboratif où chacun peut s'exprimer librement. 
                            Ma réactivité et ma capacité à prendre des décisions rapides sont des atouts que je mets au service de la gestion de projets dynamiques axés sur l'innovation.<br/><br/>
                            <strong>Lien vers Mon profil assessfirst:</strong><br/><br/>
                            <div className='center__about'>
                                <a 
                                    href="https://app.assessfirst.com/_/profile/7ow8gghg-dervilon-mbissi-kongo?lang=fr-FR" 
                                    target="_blank" 
                                    className="about-link"
                                    rel="noopener noreferrer">
                                        https://app.assessfirst.com/_/profile/7ow8gghg-dervilon-mbissi-kongo?lang=fr-FR
                                </a>
                            </div>
                        </span>
                    </p>
                </div>
            )}

            {activeTab === 'qualités' && (
                <div className="about__qualities">
                    <div className="about__qualities-block">
                        <h3>Mes points forts</h3>
                        <span>
                            <strong>Spontanéité dans mon discours :</strong> Je me montre franc et va à l'essentiel.
                        </span>
                        <span>
                            <strong>Maîtrise de mes relations :</strong> Je ne me disperse pas, garde une retenue.
                        </span>
                    </div>
                    <div className="about__qualities-block">
                        <h3>Ma manière de travailler</h3>
                        <span>
                            <strong>Reste dans le cadre :</strong> Je me centre sur mes attributions.
                        </span>
                        <span>
                            <strong>Capacité à gérer plusieurs projets :</strong> Je sais faire face à plusieurs projets de front.
                        </span>
                        <span>
                            <strong>Force de proposition :</strong> Je produit facilement de nouvelles idées.
                        </span>
                    </div>
                    <div className="about__qualities-block">
                        <h3>Ma gestion des émotions</h3>
                        <span>
                            <strong>Réactivité :</strong> Je possède une énergie forte et un sens de l'urgence.
                        </span>
                        <span>
                            <strong>Discernement :</strong> Je juge sur la base des faits.
                        </span>
                        <span>
                            <strong>Expression des ressentis :</strong> Je sais communiquer facilement avec les autres.
                        </span>
                    </div>
                </div>
                )}
            {shouldShowDownloadButton && <DownloadButton />}
        </div>
    );
};

export default About;
