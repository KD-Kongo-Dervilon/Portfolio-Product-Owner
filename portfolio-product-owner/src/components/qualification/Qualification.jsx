import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title"> Formation </h2>
            
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={
                        toggleState === 1 
                        ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"> Formation </i>
                    </div>

                    <div className={
                        toggleState === 2 
                        ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"> Expérience</i>
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content " }>

                    <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>

                            <div>
                                <h3 className="qualification__title"> Visa Anglais professionelles </h3>
                                <span className="qualification__subtitle">
                                    Eurinfac ( En cours )
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2024 - 2024
                                </div>
                            </div>
                        </div>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Product Manager </h3>
                                <span className="qualification__subtitle">
                                    Openclassrooms
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                        2024 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>

                            <div>
                                <h3 className="qualification__title"> Développeur Javascript React </h3>
                                <span className="qualification__subtitle">
                                    Openclassrooms
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Concepteur Designer UI </h3>
                                <span className="qualification__subtitle">
                                    Cefim
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                        2022 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>

                            <div>
                                <h3 className="qualification__title"> Administrateur Réseaux </h3>
                                <span className="qualification__subtitle">
                                    Cnam
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - 2019
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={
                        toggleState === 2 ? "qualification__content qualification__content-active": "qualification__content"}>
                        
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>

                            <div>
                                <h3 className="qualification__title"> Skills4all  </h3>
                                <span className="qualification__subtitle">
                                    Scrum Product Owner (en cours)
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2024 - 2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Michelin </h3>
                                <span className="qualification__subtitle">
                                    Opérateur sur machine
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                        2019 - 2018
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>

                            <div>
                                <h3 className="qualification__title"> Resto Du Coeur  </h3>
                                <span className="qualification__subtitle">
                                    Cariste, chargement/ déchargement de colis
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2018 - 2017
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Fresh envie </h3>
                                <span className="qualification__subtitle">
                                    Conditionnement des fruits surgelé
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                        2016 - 2016
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>
                        
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>

                            <div>
                                <h3 className="qualification__title"> Adwork, Adecco  </h3>
                                <span className="qualification__subtitle">
                                    Préparation en entrepôt de commande
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2015 - 2014
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification