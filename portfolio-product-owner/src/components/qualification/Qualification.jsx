import React from 'react';
import "./qualification.css";

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title"> Formation </h2>
            <span className="section__subtitle">Mon parcours scolaire</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"> Formation </i>
                    </div>

                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"> Expérience</i>
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content qualification__content-active">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Product Manager </h3>
                                <span className="qualification__subtitle">
                                    Openclassrooms
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                        2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title"> Experience </h3>
                                <span className="qualification__subtitle">
                                    Openclassrooms
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - Present
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
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title"> Dévelo Suite 2 </h3>
                                <span className="qualification__subtitle">
                                    Openclassrooms
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - Present
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> test </h3>
                                <span className="qualification__subtitle">
                                    Openclassrooms
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                        2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title"> Développeur Javascript React </h3>
                                <span className="qualification__subtitle">
                                    Openclassrooms
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - Present
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
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification