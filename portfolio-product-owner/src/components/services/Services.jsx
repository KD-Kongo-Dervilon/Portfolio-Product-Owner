import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
    <section className="services section" id="services">
        <h2 className="section__title"> Savoir Faire </h2>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className='uil uil-chart services__icon'></i>
                    <h3 className="services__title"> Gestion de produit </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}> En savoir  <i className="uil uil-arrow-right services__button-icon"> </i></span>

                <div className={toggleState === 1 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"> </i>
                        <h3 className="services__modal-title"> Gestion de produit stratégique </h3>
                        <p className="services__modal-description">
                            En tant que product manager j'ai appris à façonner ma vision du produit en identifiant les besoins du marché et 
                            en définissant une direction claire. Je crée une feuille de route détaillée basée sur 
                            des retours clients, des analyses de marché et des compétences techniques, priorisant 
                            les fonctionnalités pour maximiser leur valeur et l'impact global du produit.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"> </i>
                                <p className="services__modal-info">
                                    Définition de la vision du produit 
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"> </i>
                                <p className="services__modal-info">
                                    Élaboration de la feuille de route 
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"> </i>
                                <p className="services__modal-info">
                                    Priorisation des fonctionnalités 
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"> </i>
                    <h3 className="services__title"> Gestion de l'équipe </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}> En savoir  <i className="uil uil-arrow-right services__button-icon"> </i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"> </i>
                        <h3 className="services__modal-title"> Coordination et gestion de l'équipe </h3>
                        <p className="services__modal-description">
                            En tant que responsable du produit, je dirige l'équipe vers les objectifs du produit
                            en communiquant clairement et en inspirant. Je gère les relations avec les parties prenantes 
                            internes et externes pour aligner les attentes et faciliter le développement du produit. 
                            En outre, je résout les problèmes et facilite le flux de travail pour assurer une progression fluide.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"> </i>
                                <p className="services__modal-info">
                                    Leadership et communication 
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"> </i>
                                <p className="services__modal-info">
                                    Gestion des parties prenantes 
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"> </i>
                                <p className="services__modal-info">
                                    Facilitation et résolution de problèmes 
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"> </i>
                    <h3 className="services__title"> Analyse et itérations </h3>
                </div>
                
                <span className="services__button" onClick={() => toggleTab(3)}> En savoir  <i className="uil uil-arrow-right services__button-icon"> </i></span>

                <div className={toggleState === 3 ? "services__modal active-modal" :  "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"> </i>
                        <h3 className="services__modal-title"> Analyse et itérations  </h3>
                        <p className="services__modal-description">
                            En tant que responsable de produit , 
                            je collecte et analyse des données variées pour comprendre le comportement des utilisateurs 
                            et orienter les décisions. j' utilise ces insights pour guider des ajustements et des améliorations itératives, 
                            assurant ainsi l'évolution du produit en réponse aux besoins changeants des utilisateurs et du marché.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"> </i>
                                <p className="services__modal-info">
                                    Collecte et analyse des données 
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"> </i>
                                <p className="services__modal-info">
                                    Prise de décisions basée sur les données
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"> </i>
                                <p className="services__modal-info">
                                    Itérations et améliorations continues
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Services;
