import React from 'react';
import "./skills.css";
import Owner from './Owner';
import Frontend from './Frontend';

const SkillsSection = ({ title, children }) => (
    <section className="skills section" id="skills">
        <h2 className="section__title">{title}</h2>
        <div className="skills__container container grid">
            {children}
        </div>
    </section>
);

const Skills = () => {
    return (
        <>
            <SkillsSection title="Compétences">
                <Owner />
                <Frontend />
            </SkillsSection>
        </>
    )
}

export default Skills;
