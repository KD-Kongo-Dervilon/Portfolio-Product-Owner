import React from 'react';
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <nav className='"nav container'>
                <a href="index.html" className="nav__logo">KD Dervilon</a>

                <div className="nav__menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="" className="nav__link">
                                <i className="uil uil-estate nav-icon">Home</i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link">
                                <i className="uil uil-user nav-icon">About</i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link">
                                <i className="uil uil- nav-icon"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link">
                                <i className="uil uil- nav-icon"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link">
                                <i className="uil uil- nav-icon"></i>
                            </a>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>
    )
}

export default Header
