import React from "react";

const Services = () => {
    return (
    <section className="services section" id="services">
        <h2 className="section__title"> Services </h2>{" "}
        <span className="section__subtitle"> Ce que J 'offre</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil iul services__icon"> </i>
                    <h3 className="services__title"> </h3>
                </div>

                <span className="services__button"> En savoir + <i className="uil iul-arrow-right services__button-icon"> </i></span>

                <div className="services__modal">
                    <div className="services__modal-content">
                        <i className="uil iul-times services__modal-close"> </i>
                        <h3 className="services__modal-title"> </h3>
                        <p className="services__modal-description">
                            En un an d 'expérience en tant que étudiant en gestion de
                            projet, j 'ai mené à bien la réalisation de 12 projets dans le
                            cadre de ma formation en tant que Product Manager.Ces
                            réalisations ont été accompagnées d 'avis positifs sur la
                            qualité des livrables ainsi que sur la qualité de mon travail.{" "}
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"> </i>
                                <p className="services__modal-info">
                                    I develo the user interface
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"> </i>
                                <p className="services__modal-info">
                                    I develo the user interface
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"> </i>
                                <p className="services__modal-info">
                                    I develo the user interface
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"> </i>
                                <p className="services__modal-info">
                                    I develo the user interface
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"> </i>
                                <p className="services__modal-info">
                                    I develo the user interface
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
