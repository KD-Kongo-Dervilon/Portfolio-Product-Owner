import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i class="bx bx-award about__icon"></i>

                <h3 className="about__title">Expérience</h3>
                <span className="about__subtitle"> 1 ans de travailles </span>
            </div>

            <div className="about__box">
            <i class="bx bx-briefcase-alt about__icon"></i>

                <h3 className="about__title">Completer</h3>
                <span className="about__subtitle"> 12 + Projets </span>
            </div>

            <div className="about__box">
            <i class="bx bx-user about__icon"></i>
                <h3 className="about__title">Disponibilité</h3>
                <span className="about__subtitle">tout de suite</span>
            </div>
        </div>
    )
}

export default Info
