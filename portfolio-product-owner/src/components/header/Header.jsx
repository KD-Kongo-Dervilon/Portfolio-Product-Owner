import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./header.css";
import LogoHeader from "../../assets/LogoFooter.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      header.classList.toggle("scroll-header", window.scrollY >= 560);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setToggle(!toggle);
  };

  const handleNavLinkClick = (navId) => {
    setActiveNav(navId);
    setToggle(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          <img 
            src={LogoHeader} 
            alt="A wolf in a square with kd  and below Kongo dervilon on the right a bird" 
            className="nav__logo-header"
          />
        </a>

        <div className={classNames("nav__menu", { "show-menu": toggle })}>
          <ul className="nav__list grid">
            {[
              { id: "home", label: "Accueil", icon: "uil uil-estate" },
              { id: "about", label: "À propos", icon: "uil uil-user" },
              { id: "skills", label: "Compétences", icon: "uil uil-file-alt" },
              { id: "services", label: "Savoir-Faire", icon: "uil uil-briefcase-alt" },
              { id: "portfolio", label: "Portfolio", icon: "uil uil-scenery" },
              { id: "contact", label: "Contact", icon: "uil uil-message" }
            ].map((navItem) => (
              <li className="nav_item" key={navItem.id}>
                <a
                  href={`#${navItem.id}`}
                  className={classNames("nav__link", { "active-link": activeNav === `#${navItem.id}` })}
                  onClick={() => handleNavLinkClick(`#${navItem.id}`)}
                >
                  <i className={`${navItem.icon} nav__icon`}></i> {navItem.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={classNames("nav__toggle", { cross: toggle, closed: !toggle })} onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
