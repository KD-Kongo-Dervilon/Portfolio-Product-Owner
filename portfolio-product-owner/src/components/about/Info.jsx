import React from 'react';

const InfoItem = React.memo(({ iconClass, title, subtitle }) => (
    <div className="about__box" aria-label={title}>
        <i className={`bx ${iconClass} about__icon`} aria-hidden="true"></i>
        <div>
            <h3 className="about__title">{title}</h3>
            <span className="about__subtitle">{subtitle}</span>
        </div>
    </div>
));

const Info = () => {
    return (
        <div className="about__info grid">
            {/* Utilisation de fragments pour éviter les divs inutiles */}
            <InfoItem iconClass="bx-award" title="Expérience" subtitle="Diverses et variées" />
            <InfoItem iconClass="bx-briefcase-alt" title="Compléter" subtitle="12 - Projets" />
            <InfoItem iconClass="bx-user" title="Disponibilité" subtitle="Tout de suite" />
            <InfoItem iconClass="bx bx-buildings" title="Métiers divers." subtitle="Compétences transversales." />
        </div>
    );
};

export default Info;
