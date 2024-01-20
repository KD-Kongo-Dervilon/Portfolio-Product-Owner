// Social.js
import React from 'react';

const socialLinks = [
    {
        href: 'https://www.linkedin.com/in/dervilon-m-bissi-kongo-ab3546250/',
        iconClass: 'uil-linkedin-alt',
        label: 'LinkedIn'
    },
    {
        href: 'https://dribbble.com/designers?tab=results&search%5Bname%5D=Product%20Owner&search%5BsavedSearchId%5D=325548&search%5Bspecialties%5D%5B%5D=2&search%5BexperienceLevels%5D%5B%5D=1–2%20years&search%5BbookmarkCount%5D=0&search%5BhourlyRateMin%5D=0&search%5BhourlyRateMax%5D=0&search%5BworkType%5D=freelance&search%5BskipUpsell%5D=true&search%5BsearchUid%5D=18499051-1702990974423',
        iconClass: 'uil uil-dribbble',
        label: 'Dribbble'
    },
    {
        href: 'https://github.com/KD-Kongo-Dervilon',
        iconClass: 'uil uil-github-alt',
        label: 'GitHub'
    }
];

const Social = () => {
    return (
        <div>
            <div className="home_social">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className="home_social-icon"
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.label}
                    >
                        <i className={link.iconClass}></i>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Social;

