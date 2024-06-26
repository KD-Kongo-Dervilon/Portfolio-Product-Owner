import React, { useRef, useState } from 'react';
import CookieConsent from './CookieConsent';
import emailjs from '@emailjs/browser';
import "./contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const form = useRef();
    const [isSubmitting, setSubmitting] = useState(false);

    const notify = (messageType, message) => {
        if (messageType === 'success') {
            toast.success(message);
        } else if (messageType === 'error') {
            toast.error(message);
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (isSubmitting) {
            return; // Si déjà en cours d'envoi, ne rien faire
        }

        const formMess = document.querySelector(".form__message");

        // Récupére les valeurs des champs du formulaire
        const name = form.current.elements.name.value;
        const email = form.current.elements.email.value;
        const project = form.current.elements.project.value;

         // Vérifie si les champs sont vides
        if (!name || !email || !project) {

            setTimeout(() => {
                formMess.innerHTML = "";
            }, 2500);

             // Utilise la fonction notify pour afficher le message d'erreur
            notify('error', 'Veuillez remplir tous les champs du formulaire');
        
          return; // Arrêter l'exécution si le formulaire est vide
        }

        // Valide le format de l'e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {


        setTimeout(() => {
            formMess.innerHTML = "";
            }, 2500);

             // Utiliser la fonction notify pour afficher le message d'erreur
            notify('error', 'Veuillez saisir une adresse e-mail valide');
        
           return; // Arrêter l'exécution si l'e-mail n'est pas valide
        }

        setSubmitting(true); // Met à jour l'état d'envoi

        emailjs.sendForm(
            "service_l6qltcy",
            "template_m2dbvzo", 
            form.current,
            "Nzs-AvRciDNz7eJuf"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    form.current.reset();

                     // Stocker le nom d'utilisateur et l'e-mail dans le cookie
                    const expirationDate = new Date();
                    expirationDate.setFullYear(expirationDate.getFullYear() + 1); // Cookie valable pendant 1 an
                    document.cookie = `userData=${name},${email}; expires=${expirationDate.toUTCString()}; path=/`;


                    setTimeout(() => {
                        formMess.innerHTML = "";
                    }, 2500);

                    notify('success', 'Message envoyé');

                },
                (err) => {
                    console.log(err.text);
                    formMess.innerHTML = "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";

                    setTimeout(() => {
                        formMess.innerHTML = "";
                    }, 2500);

                    // Utiliser la fonction notify pour afficher le message d'erreur
                    notify('error', 'Une erreur s\'est produite, veuillez réessayer');
                    }
                )
                .finally(() => {
                    setSubmitting(false); // Met à jour l'état d'envoi après le traitement
                }
            );
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title"> Entrer en contact </h2>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Me parler </h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">Dervilon.mbissi@gmail.com</span>

                            <a href="mailto:dervilon.mbissi@gmail.com" className="contact__button">
                                Écrivez moi 
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <CookieConsent/>
                        
                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon what"></i>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data"> +33 15 31 </span>

                            <a href="https://api.whatsapp.com/send?phone=0636158831&text=Hello,more information" className="contact__button">
                                Écrivez moi 
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-discord-alt contact__card-icon discord"></i>

                            <h3 className="contact__card-title"> Discord </h3>
                            <span className="contact__card-data"> Raylight37 </span>

                            <a href="https://discord.com" className="contact__button">
                                Écrivez moi 
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Décrivez moi votre projet</h3>

                    <form ref={form}  className="contact__form">
                        <div className="contact__form-div">
                            <label htmlFor="name" className="contact__form-tag">Nom</label>
                            <input 
                                type="text" 
                                id="name"
                                name="name"
                                required
                                className="contact__form-input"
                                placeholder="Votre nom"
                            />
                        </div>

                        <div className="contact__form-div">
                            <label htmlFor="email" className="contact__form-tag">Émail</label>
                            <input 
                                type="email" 
                                name="email"
                                className="contact__form-input"
                                required
                                placeholder="Votre email"
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag"> Projet </label>
                            <textarea
                                name="project" 
                                required
                                cols="30"
                                rows="10"
                                className="contact__form-input"
                                placeholder="Votre projet"
                                >
                            </textarea>
                        </div>

                        <button type="submit"  onClick={sendEmail} className="button button--flex button-home">
                            Envoyer
                            <svg className="hello" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="var(--container-color)" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" id="plane"><path d="M277.941,434.868c-4.176,0-7.518-2.132-10.75-4.193c-0.063-0.039-0.123-0.079-0.184-0.12l-52.157-35.538
				                c-14.486,9.457-29,18.962-43.499,28.457l-10.657,6.979c-3.068,2.17-5.917,3.226-8.707,3.226c-2.827,0-5.433-1.124-7.336-3.166
				                c-2.583-2.768-3.664-6.925-3.302-12.701v-76.839c0-2.272,1.073-4.411,2.894-5.771l180.875-135.021l-219.382,115.67
				                c-2.361,1.247-5.218,1.083-7.422-0.425l-6.944-4.746c-19.905-13.604-39.813-27.211-59.768-40.82
				                c-5.776-3.501-13.211-9.054-12.255-17.094c1.053-8.856,11.766-12.348,15.517-13.532l157.609-57.158L473.988,80.644
				                c0.245-0.089,0.538-0.2,0.861-0.323c3.114-1.186,6.162-2.25,9.215-2.25c3.476,0,6.446,1.516,8.149,4.158
				                c2.998,4.654,0.586,9.971-0.207,11.718c-0.118,0.261-0.252,0.515-0.4,0.76L291.01,425.371
				                C289.467,428.026,285.437,434.868,277.941,434.868z M275.027,418.591c0.698,0.444,1.588,1.01,2.307,1.416
				                c0.317-0.421,0.737-1.038,1.256-1.93c0.022-0.039,0.045-0.077,0.068-0.116l195.35-322.015l-276.64,99.675L39.631,252.825
				                c-0.096,0.034-0.192,0.067-0.289,0.098c-2.066,0.651-3.472,1.242-4.415,1.714c0.858,0.738,2.202,1.738,4.285,2.993
				                c0.116,0.07,0.23,0.143,0.342,0.219c20.013,13.648,39.98,27.296,59.943,40.94l3.361,2.297l297.031-156.61
				                c3.325-1.752,7.439-0.654,9.447,2.525c2.008,3.179,1.231,7.367-1.781,9.616L155.753,344.583v71.889l7.708-5.048
				                c15.848-10.378,31.713-20.768,47.541-31.094c2.436-1.59,5.586-1.558,7.99,0.08L275.027,418.591z"></path>
                            </svg>
                        </button>
                        
                    </form>

                    <div className="form__message"></div>
                    <ToastContainer />
                </div>
            </div>
        </section>
    )
}

export default Contact
