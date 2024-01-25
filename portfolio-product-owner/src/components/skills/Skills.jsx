import React from 'react';
import "./skills.css";
import Owner from './Owner';
import Frontend from './Frontend';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Compétences</h2>

            <div className="skills__container container grid">
                <Owner/>
                <Frontend/>
            </div>
        </section>
    )
}

export default Skills
