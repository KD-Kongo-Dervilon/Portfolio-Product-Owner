import React from 'react';

const InfoItem = ({ iconClass, title, subtitle }) => (
    <div className="about__box">
        <i className={`bx ${iconClass} about__icon`}></i>
        <h3 className="about__title">{title}</h3>
        <span className="about__subtitle">{subtitle}</span>
    </div>
);

const Info = () => {
    return (
        <div className="about__info grid">
            <InfoItem iconClass="bx-award" title="Expérience" subtitle="1 an de travail" />
            <InfoItem iconClass="bx-briefcase-alt" title="Compléter" subtitle="12 - Projets" />
            <InfoItem iconClass="bx-user" title="Disponibilité" subtitle="Tout de suite" />
        </div>
    );
};

export default Info;
