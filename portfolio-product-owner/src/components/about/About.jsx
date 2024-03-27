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
                            {tab === 'info' ? 'Expériences' : tab === 'qualités' ? 'Qualités & Défauts' : 'Information'}
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
                                <strong>"Grâce à</strong> une expérience professionnelle variée et enrichissante, j'apporte une perspective solide et une valeur ajoutée significative à toute équipe ou entreprise. Ma formation de product manager m'a doté d'une approche méthodique et orientée vers les résultats dans la gestion des produits, ainsi que d'une capacité à travailler efficacement avec des équipes multidisciplinaires.<br/><br/>
                                <strong>En tant </strong> que Développeur JavaScript React, je me suis concentré sur la conception d'interfaces utilisateur, mettant l'accent sur l'expérience utilisateur et maintenant un haut niveau de qualité grâce à ma maîtrise des méthodologies Agile et Scrum. Mon expérience chez Michelin a renforcé mes compétences en gestion opérationnelle et en respect des normes de qualité, témoignant de ma capacité à m'adapter à différents environnements de travail et à relever de nouveaux défis.<br/><br/>
                                <strong>Ma combinaison</strong> d'expériences dans le développement, la gestion de projet et la gestion opérationnelle, ainsi que mes compétences techniques et ma passion pour l'innovation, font de moi un candidat idéal pour le poste de Product Owner. Je suis prêt à apporter mon expertise et mon engagement à votre entreprise, convaincu de pouvoir contribuer de manière significative à votre succès à long terme."<br/>
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
                            <strong>Mon objectif</strong> est de devenir un Product Owner accompli et de progresser vers un rôle de Product Manager. Mon parcours et mes formations m'ont apporté des compétences essentielles pour gérer efficacement les produits, en mettant l'accent sur la satisfaction client, l'innovation et les objectifs commerciaux.<br/><br/> 
                            <strong>Avec une expertise</strong>  en Product Management et en développement JavaScript React, je comprends les besoins des utilisateurs et suis capable de concevoir et de gérer des produits de manière efficace. Ma polyvalence, acquise grâce à mes expériences variées, me permet d'aborder les défis sous différents angles et de collaborer efficacement avec des équipes interdisciplinaires<br/><br/>
                            <strong>Je suis déterminé</strong> à relever de nouveaux défis et à m'adapter rapidement aux besoins de l'entreprise. Mon engagement est de développer des produits de haute qualité qui dépassent les attentes des utilisateurs tout en atteignant les objectifs fixés. Enfin, je suis un collaborateur efficace, capable de motiver les membres de l'équipe et de construire des relations solides. Je suis convaincu de pouvoir apporter une valeur ajoutée significative à votre entreprise.
                        </span>
                    </p>
                </div>
            )}

            {activeTab === 'qualités' && (
                <div className="about__qualities">
                    <div className="about__qualities-block appart">
                        <h3>Qualités</h3>
                        <span>
                            <strong>Adaptabilité :</strong> 
                            Mon parcours varié, allant du développement à la gestion de projet, démontre ma capacité à m'adapter à diverses situations.<br/>
                        </span>
                        <span>
                            <strong>Réactivité :</strong> 
                            Mon expérience en tant qu'opérateur sur machine chez Michelin témoigne de ma promptitude à réagir face aux défis, notamment en cas de panne.<br/>
                        </span>
                        <span>
                            <strong>Persevérance :</strong> 
                            Durant ma formation en développement JavaScript React, ma persévérance m'a motivé à résoudre des problèmes de code complexes.<br/>
                        </span>
                    </div>
                    <div className="about__qualities-block">
                        <h3>Défauts</h3>
                        <span>
                            <strong>Méticuleux :</strong> 
                            Ma méticulosité se traduit par une grande attention aux détails et une recherche constante de la perfection dans mon travail.
                            Cela  me permet de livrer des résultats de haute qualité et de m'assurer que chaque tâche est réalisée avec précision et efficacité.
                            .<br/>
                        </span>
                        <span>
                            <strong>Introverti :</strong> 
                            Mon caractère introverti me permet de développer une profonde compréhension des dynamiques d'équipe et des besoins individuels.
                            En prenant le temps d'écouter et d'observer, je suis capable de proposer des solutions adaptées qui répondent aux besoins de chacun. 
                        </span>
                    </div>
                </div>
            )}

            {shouldShowDownloadButton && <DownloadButton />}
        </div>
    );
};

export default About;
