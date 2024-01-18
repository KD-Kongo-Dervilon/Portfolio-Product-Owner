import React from 'react';
import './work.css';
import Works from './Works';

const Work = () => {
    return (
        <section className="work section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle"> 
                Mes derniers projets dans le cadre de ma formation <br/>
                de Product manager chez OpenClassrooms 
            </span>
            <Works/>
        </section>
    )
}

export default Work
