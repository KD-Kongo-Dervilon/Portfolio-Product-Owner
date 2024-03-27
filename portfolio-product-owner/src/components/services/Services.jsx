import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [activeTab, setActiveTab] = useState(null);

    const toggleTab = (index) => {
        setActiveTab(activeTab === index ? null : index);
    };

    const servicesData = [
        {
            icon: "uil-chart",
            title: "Gestion de produit",
            description:
                "En tant que product manager, j'ai appris à façonner ma vision du produit en identifiant les besoins du marché et en définissant une direction claire...",
            services: [
                "Définition de la vision du produit",
                "Élaboration de la feuille de route",
                "Priorisation des fonctionnalités"
            ]
        },
        {
            icon: "uil-web-grid",
            title: "Gestion de l'équipe",
            description:
                "En tant que responsable du produit, je dirige l'équipe vers les objectifs du produit en communiquant clairement et en inspirant...",
            services: [
                "Leadership et communication",
                "Gestion des parties prenantes",
                "Facilitation et résolution de problèmes"
            ]
        },
        {
            icon: "uil-arrow",
            title: "Analyse et itérations",
            description:
                "En tant que responsable de produit, je collecte et analyse des données variées pour comprendre le comportement des utilisateurs et orienter les décisions...",
            services: [
                "Collecte et analyse des données",
                "Prise de décisions basée sur les données",
                "Itérations et améliorations continues"
            ]
        }
    ];

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Savoir Faire</h2>
            <div className="services__container container grid">
                {servicesData.map((service, index) => (
                    <div className="services__content" key={index}>
                        <div>
                            <i className={`uil ${service.icon} services__icon`}></i>
                            <h3 className="services__title">{service.title}</h3>
                        </div>
                        <span className="services__button" onClick={() => toggleTab(index)}>
                            En savoir <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>
                        <div className={`services__modal ${activeTab === index ? 'active-modal' : ''}`}>
                            <div className="services__modal-content">
                                <i className="uil uil-times services__modal-close" onClick={() => toggleTab(index)}></i>
                                <h3 className="services__modal-title">{service.title}</h3>
                                <p className="services__modal-description">{service.description}</p>
                                <ul className="services__modal-services grid">
                                    {service.services.map((item, idx) => (
                                        <li className="services__modal-service" key={idx}>
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
