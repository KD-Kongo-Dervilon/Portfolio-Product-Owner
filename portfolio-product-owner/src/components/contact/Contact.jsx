import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CookieConsent from './CookieConsent';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const formRef = useRef();
    const [isSubmitting, setSubmitting] = useState(false);
    const [formValidity, setFormValidity] = useState({
        name: null,
        email: null,
        project: null,
    });

    const notify = (messageType, message) => {
        if (messageType === 'success') {
            toast.success(message);
        } else if (messageType === 'error') {
            toast.error(message);
        }
    };

    const validateField = (name, value) => {
        switch (name) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            case 'name':
            case 'project':
                return value.length >= 3; // Assuming 3 is the minimum length
            default:
                return false;
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const isValid = validateField(name, value);

        setFormValidity(prevState => ({
            ...prevState,
            [name]: isValid,
        }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        if (isSubmitting) {
            return;
        }

        const form = formRef.current;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const project = form.elements.project.value;

        if (!name || !email || !project || !formValidity.name || !formValidity.email || !formValidity.project) {
            notify('error', 'Veuillez remplir tous les champs du formulaire correctement');
            setFormValidity({
                name: name.length >= 3,
                email: validateField('email', email),
                project: project.length >= 10,
            });
            return;
        }

        setSubmitting(true);

        try {
            const result = await emailjs.sendForm(
                "service_l6qltcy",
                "template_m2dbvzo",
                form,
                "Nzs-AvRciDNz7eJuf"
            );

            console.log(result.text);
            form.reset();

            const expirationDate = new Date();
            expirationDate.setFullYear(expirationDate.getFullYear() + 1);
            document.cookie = `userData=${name},${email}; expires=${expirationDate.toUTCString()}; path=/`;

            notify('success', 'Message envoyé');

            // Reset form validity
            setFormValidity({
                name: null,
                email: null,
                project: null,
            });
        } catch (error) {
            console.error(error.text);
            notify('error', 'Une erreur s\'est produite, veuillez réessayer');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Entrer en contact</h2>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Me parler</h3>

                    <div className="contact__info">
                        {/* Les cartes d'informations */}
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">Dervilon.mbissi@gmail.com</span>
                            <a href="mailto:dervilon.mbissi@gmail.com" className="contact__button">
                                Écrivez moi 
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <CookieConsent />
                        
                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon what"></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">+33 15 31</span>
                            <a href="https://api.whatsapp.com/send?phone=0636158831&text=Hello,more information" className="contact__button">
                                Écrivez moi 
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-discord-alt contact__card-icon discord"></i>
                            <h3 className="contact__card-title">Discord</h3>
                            <span className="contact__card-data">Raylight37</span>
                            <a href="https://discord.com" className="contact__button">
                                Écrivez moi 
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Décrivez votre projet</h3>

                    <form ref={formRef} className="contact__form" onSubmit={sendEmail}>
                        <div className={`contact__form-div ${formValidity.name === false ? 'invalide' : ''} ${formValidity.name ? 'valide' : ''}`}>
                            <label htmlFor="name" className="contact__form-tag">
                                Nom
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                minLength="3"
                                className="contact__form-input"
                                placeholder="Votre nom"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={`contact__form-div ${formValidity.email === false ? 'invalide' : ''} ${formValidity.email ? 'valide' : ''}`}>
                            <label htmlFor="email" className="contact__form-tag">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="contact__form-input"
                                placeholder="Votre email"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={`contact__form-div contact__form-area ${formValidity.project === false ? 'invalide' : ''} ${formValidity.project ? 'valide' : ''}`}>
                            <label htmlFor="project" className="contact__form-tag">
                                Projet
                            </label>
                            <textarea
                                id="project"
                                name="project"
                                required
                                minLength="10"
                                cols="30"
                                rows="10"
                                className="contact__form-input"
                                placeholder="Décrivez votre projet"
                                onChange={handleInputChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="button button--flex button-home">
                            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                            <svg
                                className="hello"
                                xmlns="http://www.w3.org/2000/svg"
                                width="35"
                                height="35"
                                fill="var(--container-color)"
                                viewBox="0 0 512 512"
                                id="plane"
                            >
                                <path
                                    d="M275.941,434.868c-4.176,0-7.518-2.132-10.75-4.193c-0.063-0.039-0.123-0.079-0.184-0.12l-52.157-35.538c-14.486,9.457-29,18.962-43.499,28.457l-10.657,6.979c-3.068,2.17-5.917,3.226-8.707,3.226c-2.827,0-5.433-1.124-7.336-3.166c-2.583-2.768-3.664-6.925-3.302-12.701v-76.839c0-2.272,1.073-4.411,2.894-5.771l180.875-135.021l-219.382,115.67c-2.361,1.247-5.218,1.083-7.422-0.425l-6.944-4.746c-19.905-13.604-39.813-27.211-59.768-40.82c-5.776-3.501-13.211-9.054-12.255-17.094c1.053-8.856,11.766-12.348,15.517-13.532l157.609-57.158L473.988,80.644c0.245-0.089,0.538-0.2,0.861-0.323c3.114-1.186,6.162-2.25,9.215-2.25c3.476,0,6.446,1.516,8.149,4.158c2.998,4.654,0.586,9.971-0.207,11.718c-0.118,0.261-0.252,0.515-0.4,0.76L291.01,425.371C289.467,428.026,285.437,434.868,275.941,434.868z M275.027,418.591c0.698,0.444,1.588,1.01,2.307,1.416c0.317-0.421,0.737-1.038,1.256-1.93c0.022-0.039,0.045-0.077,0.068-0.116l195.35-322.015l-276.64,99.675L39.631,252.825c-0.096,0.034-0.192,0.067-0.289,0.098c-2.066,0.651-3.472,1.242-4.415,1.714c0.858,0.738,2.202,1.738,4.285,2.993c0.116,0.07,0.23,0.143,0.342,0.219c20.013,13.648,39.98,27.296,59.943,40.94l3.361,2.297l297.031-156.61c3.325-1.752,7.439-0.654,9.447,2.525c2.008,3.179,1.231,7.367-1.781,9.616L155.753,344.583v71.889l7.708-5.048c15.848-10.378,31.713-20.768,47.541-31.094c2.436-1.59,5.586-1.558,7.99,0.08L275.027,418.591z"
                                ></path>
                            </svg>
                        </button>
                    </form>

                    <div className="form__message"></div>
                    <ToastContainer />
                </div>
            </div>
        </section>
    );
};

export default Contact;
