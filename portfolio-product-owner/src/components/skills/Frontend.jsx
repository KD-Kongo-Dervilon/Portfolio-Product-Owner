import React from 'react'

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend /Backend</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Langages de programmation</h3>
                            <span className="skills__level">
                                Html-CSS / JavaScript 
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Frameworks Js</h3>
                            <span className="skills__level">
                                React.js/ Next js/ Redux-Toolkit
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Tests et débogage</h3>
                            <span className="skills__level"> Tests unitaires / Jest  </span>
                        </div>
                    </div>

                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Contrôle de version</h3>
                            <span className="skills__level">
                                Git-Github
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Frameworks </h3>
                            <span className="skills__level">
                                Express.js (Node.js), 
                            </span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Bases de données</h3>
                            <span className="skills__level">
                                MongoDB
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Frontend
