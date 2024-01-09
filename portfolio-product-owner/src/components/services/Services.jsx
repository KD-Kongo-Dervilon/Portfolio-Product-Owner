import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
    <section className="services section" id="services">
        <h2 className="section__title"> Services </h2>
        <span className="section__subtitle"> Ce que je sais faire  </span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i class='bx bx-package services__icon'></i>
                    <h3 className="services__title"> Gestion de produit stratégique   </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}> En savoir + <i className="uil uil-arrow-right services__button-icon"> </i></span>

                <div className={toggleState === 1 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"> </i>
                        <h3 className="services__modal-title"> Gestion de produit stratégique </h3>
                        <p className="services__modal-description">
                            En un an d 'expérience en tant qu' étudiant en gestion de
                            projet, j 'ai mené à bien la réalisation de 12 projets dans le
                            cadre de ma formation en tant que Product Manager.Ces
                            réalisations ont été accompagnées d 'avis positifs sur la
                            qualité des livrables ainsi que sur la qualité de mon travail.
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
                                    Élaboration de la feuille de route du produit
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"> </i>
                                <p className="services__modal-info">
                                    Priorisation des fonctionnalités et des objectifs
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"> </i>
                    <h3 className="services__title"> Coordination et gestion de l'équipe </h3>
                </div>

                <span className="services__button"> En savoir + <i className="uil uil-arrow-right services__button-icon"> </i></span>

                <div className="services__modal">
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close"> </i>
                        <h3 className="services__modal-title"> Coordination et gestion de l'équipe </h3>
                        <p className="services__modal-description">
                            En un an d 'expérience en tant qu'étudiant en gestion de
                            projet, j 'ai mené à bien la réalisation de 12 projets dans le
                            cadre de ma formation en tant que Product Manager.Ces
                            réalisations ont été accompagnées d 'avis positifs sur la
                            qualité des livrables ainsi que sur la qualité de mon travail.{" "}
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
                    <h3 className="services__title"> Analyse et itérations basées sur les données </h3>
                </div>

                <span className="services__button"> En savoir + <i className="uil uil-arrow-right services__button-icon"> </i></span>

                <div className="services__modal">
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close"> </i>
                        <h3 className="services__modal-title"> Analyse et itérations basées sur les données </h3>
                        <p className="services__modal-description">
                            En un an d 'expérience en tant qu'étudiant en gestion de
                            projet, j 'ai mené à bien la réalisation de 12 projets dans le
                            cadre de ma formation en tant que Product Manager.Ces
                            réalisations ont été accompagnées d 'avis positifs sur la
                            qualité des livrables ainsi que sur la qualité de mon travail.{" "}
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
