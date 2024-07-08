import React, { useState, useEffect } from 'react';
import Modal from '../modal/Modal';

const CookieConsent = () => {
    const [consentGiven, setConsentGiven] = useState(localStorage.getItem('cookieConsent') === 'true');
    const [modalOpen, setModalOpen] = useState(false);
    const [cookieRefused, setCookieRefused] = useState(false);

    const handleConsent = () => {
        const username = 'name';
        const expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1); // Cookie valide pendant 1 an

        // Utilisation de `encodeURIComponent` pour les valeurs de cookies
        document.cookie = `username=${encodeURIComponent(username)}; expires=${expirationDate.toUTCString()}; path=/`;

        localStorage.setItem('cookieConsent', 'true');
        setConsentGiven(true);
    };

    const handleRefuse = () => {
        setModalOpen(true);
        setCookieRefused(true);
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        // Récupère le nom d'utilisateur du cookie
        const usernameCookie = document.cookie.split('; ').find(row => row.startsWith('username='));

        if (usernameCookie) {
            const username = decodeURIComponent(usernameCookie.split('=')[1]);
            console.log('Username:', username);
        }
    }, []); // Exécute une seule fois au chargement initial

    if (consentGiven || cookieRefused) {
        return null;
    }

    return (
        <div className={`cookie-consent ${cookieRefused ? 'refused' : ''}`}>
            <div className="cookie-banner" onClick={openModal}>
                <div className="cookie-icon">🍪</div>
                <div className="cookie-text">
                    <p>
                        Ce portfolio utilise des cookies pour analyser les interactions afin d'améliorer le site et proposer un contenu pertinent aux recruteurs.
                        <a className="cookie__back" href="#privacy-policy">Politique de confidentialité</a>.
                    </p>
                </div>
                <div className="cookie-actions">
                    <button className="accept-btn" onClick={handleConsent}>
                        J'accepte
                    </button>
                    <button className="refuse-btn" onClick={handleRefuse}>
                        Je refuse
                    </button>
                </div>
            </div>

            {modalOpen && (
                <Modal closeModal={closeModal}>
                    {/* Contenu Politique de confidentialité */}
                    <h2 className="modal__title">Politique de confidentialité</h2>
                        Mon portfolio utilise Google Analytics , Google Tag Manager, des cookies pour améliorer l'expérience des visiteurs et présenter un contenu attractif aux recruteurs potentiels.<br/> <br/>
                        J'analyse les interactions des utilisateurs pour optimiser le portfolio.
                        À l'avenir, je prévois d'ajouter une section blog pour partager mes expériences et projets.<br/><br/> 
                        Les types de cookies utilisés incluent les cookies de session et les cookies persistants.<br/><br/>
                        Lien vers la <a className="cookie__save" href="https://www.tresor.economie.gouv.fr/Institutionnel/politique-de-cookies" target="_blank" rel="noreferrer">La Politique de cookies</a> 
                </Modal>
            )}
        </div>
    );
};

export default CookieConsent;
