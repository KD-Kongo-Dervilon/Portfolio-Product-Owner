import React, { useState } from 'react';

const WorksItems = ({ item }) => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="work__card" key={item.id}>
            <div className="work__content">
                <div>
                    <img src={item.image} alt="" className="work__img" />
                    <h3 className="work__title">{item.title}</h3>
                    <p className="work__modal-description">
                        {item.skills}
                    </p>
                </div>

                <span className="work__button" onClick={() => toggleTab(1)}> En savoir <i className="uil uil-arrow-right work__button-icon"> </i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"> </i>
                        <h3 className="services__modal-title">{item.title}</h3>
                        <p className="services__modal-description">
                            {item.desc}
                        </p>
                        {item.link && (
                            <a href={item.link} className="work__link-adalo">
                                {item.linkText || "Voir plus"}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorksItems;
