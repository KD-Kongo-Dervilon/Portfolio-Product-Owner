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
                    </div>

                    <div className={
                        toggleState === 2 ? "qualification__content qualification__content-active": "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Product Manager </h3>
                                <span className="qualification__subtitle">
                                    Openclassrooms<br/>
                                    Gestion de Projet
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
                                    Openclassrooms<br/>
                                    Développement de Site
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Michelin </h3>
                                <span className="qualification__subtitle">
                                    Gestion et fonctionnement des machines de fabrication
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification