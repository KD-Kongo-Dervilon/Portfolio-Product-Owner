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

const Owner = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Product Manager</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <Skill name="Méthodologies" level="Agile / Scrum / Waterfall" />
                    <Skill name="UX Design" level="Heuristique de Nielsen" />
                    <Skill name="Gestion de Projet" level="Trello / Notion / Miro / Jira" />
                </div>
                <div className="skills__group">
                    <Skill name="Design" level="Figma / Canva / Adobe XD" />
                    <Skill name="Présentation" level="PowerPoint / Google Slides" />
                    <Skill name="Analyse de données" level="Excel / Google Analytics" />
                </div>
            </div>
        </div>
    );
}

export default Owner;
