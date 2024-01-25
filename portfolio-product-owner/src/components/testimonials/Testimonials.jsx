import React from "react";
import "./testimonial.css";
import { Data } from "./Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import des modules requis
import { Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {
    return (
        <section className="testimonial container section">
            <h2 className="section__title"> Les avis sur mes Projets </h2>

            <Swiper
                className="testimonial__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination, Navigation]}
            >
                {Data.map(({ id, image, author, title, description }) => (
                    <SwiperSlide className="testimonial__card" key={id}>
                        <img src={image} alt="" className="testimonial__img" />
                        <h3 className="testimonial__name">{title}</h3>
                        <span className="testimonial__author">{author}</span>
                        <p className="testimonial__description">{description}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            {/* Ajout des flèches de navigation avec des classes personnalisées */}
            <div className="swiper-button-next swiper-button-next-custom"></div>
            <div className="swiper-button-prev swiper-button-prev-custom"></div>
        </section>
    );
};

export default Testimonials;
