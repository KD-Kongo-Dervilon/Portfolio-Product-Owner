import React from 'react';

const Skill = ({ name, level }) => (
    <div className="skills__data">
        <i className="bx bx-badge-check"></i>
        <div>
            <h3 className="skills__name">{name}</h3>
            <span className="skills__level">{level}</span>
        </div>
    </div>
);

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend / Backend</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <Skill name="Langages de programmation" level="Html-CSS / JavaScript" />
                    <Skill name="Frameworks Js" level="React.js / Next.js / Redux-Toolkit" />
                    <Skill name="Tests et débogage" level="Tests unitaires / Jest" />
                </div>
                <div className="skills__group">
                    <Skill name="Contrôle de version" level="Git-Github" />
                    <Skill name="Frameworks" level="Express.js (Node.js)" />
                    <Skill name="Bases de données" level="MongoDB" />
                </div>
            </div>
        </div>
    );
}

export default Frontend;
