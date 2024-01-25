import React, { useState, useEffect } from "react";
import Modal from "../modal/Modal";

const CookieConsent = () => {
    const [consentGiven, setConsentGiven] = useState(
        localStorage.getItem("cookieConsent") === "true"
    );
    const [modalOpen, setModalOpen] = useState(false);
    const [cookieRefused, setCookieRefused] = useState(false);


    const handleConsent = () => {

        const username = "name";
        const expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1); // Cookie valable pendant 1 an

        document.cookie = `username=${username}; expires=${expirationDate.toUTCString()}; path=/`;

        localStorage.setItem("cookieConsent", "true");
        setConsentGiven(true);
    };

    const handleRefuse = () => {
        setModalOpen(true);
        setCookieRefused(true)
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        // Récupere le nom d'utilisateur du cookie
        const usernameCookie = document.cookie.split('; ').find(row => row.startsWith('username='));
        
        if (usernameCookie) {
            const username = usernameCookie.split('=')[1];
            console.log("Username:", username);
        }
    }, []);

    if (consentGiven || cookieRefused) {
        return null;
    }

    return (
        <div className={`cookie-consent ${cookieRefused ? "refused" : ""}`}>
            <div className="cookie-banner" onClick={openModal}>
                <div className="cookie-icon">
                    🍪
                </div>
                <div className="cookie-text">
                    <p>Ce site utilise des cookies pour vous offrir la meilleure expérience possible.
                        En continuant à utiliser ce site, vous acceptez mon utilisation des cookies conformément à la 
                        <a className="cookie__back" href="#privacy-policy">Politique de confidentialité</a>.
                    </p>
                </div>
                <div className="cookie-actions">
                    <button className="accept-btn" onClick={handleConsent}>J'accepte</button>
                    <button className="refuse-btn" onClick={handleRefuse}>Je refuse </button>
                </div>
            </div>

            {modalOpen && (
                <Modal closeModal={closeModal}>
                    {/* Contenu  Politique de confidentialité */}
                    <h2 className="modal__title">Politique de confidentialité</h2>
                        J'utilise des cookies sur mon site web pour améliorer votre expérience utilisateur, 
                        comprendre vos préférences et recueillir des informations utiles qui m'aideront à améliorer continuellement mon site. 
                        Types de cookies que j'utilise : 
                        Cookies de session : Ces cookies sont temporaires et expireront à la fin de votre session de navigation. 
                        Ils sont essentiels pour assurer le bon fonctionnement de certaines fonctionnalités de mon site.
                        Cookies persistants : Ces cookies restent sur votre appareil après la fin de votre session de navigation. 
                        Ils m'aident à reconnaître votre appareil lorsque vous revenez sur mon site, ce qui me permet de vous offrir une expérience utilisateur plus personnalisée
                        Lien vers la <a className="cookie__save" href="https://www.tresor.economie.gouv.fr/Institutionnel/politique-de-cookies" target="_blank" rel="noreferrer">Politique de cookies</a> 
                </Modal>
            )}
        </div>
        );
    };

export default CookieConsent;
