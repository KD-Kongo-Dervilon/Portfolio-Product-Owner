import React from 'react';
import "./testimonial.css";
import { Data } from "./Data";

// Import Swiper React components 
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper Styles
import "swiper/css/pagination";


const Testimonials = () => {
    return (
        <section className="testimonial container section">
            <h2 className="section__title"> Les avis sur mes Projets </h2>
            <span className="section__subtitle"> Les évaluation laissées </span>

            <div className="testimonial__container">
                {Data.map(({id, image, author, title, description}) => {
                    return (
                        <div className="testimonial__card" key={id}>
                            <img src={image} alt="" className="testimonial__img" />
                            <h3 className="testimonial__name">{title}</h3>
                            <span className="testimonial__author">{author}</span>
                            <p className="testimonial__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Testimonials
