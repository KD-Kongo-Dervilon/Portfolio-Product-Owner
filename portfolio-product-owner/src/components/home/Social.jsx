// Social.js
import React from 'react';

const socialLinks = [
    {
        href: 'https://www.linkedin.com/in/dervilon-m-bissi-kongo-ab3546250/',
        iconClass: 'uil-linkedin-alt',
        label: 'LinkedIn'
    },
    {
        href: 'https://dribbble.com/following',
        iconClass: 'uil uil-dribbble',
        label: 'Dribbble'
    },
    {
        href: 'https://github.com/KD-Kongo-Dervilon',
        iconClass: 'uil uil-github-alt',
        label: 'GitHub'
    },
];

const Social = () => {
    return (
        <div className="home_social">
            <ul>
                {socialLinks.map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            className="home_social-icon"
                            target="_blank"
                            rel="noreferrer"
                            aria-label={link.label}
                        >
                            <i className={link.iconClass}></i>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Social;
