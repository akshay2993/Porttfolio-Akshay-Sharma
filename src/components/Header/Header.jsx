import { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
// import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
// import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";

import "./header.css";

const header = ({ darkMode, setDarkMode }) => {
  const header = useRef()
  const [showMenu, setShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY > 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const headerAnim = gsap.from('.header', {opacity:0, top:'-500px',duration:1,ease:'back(1)'})
    })
    return () => ctx.revert()
  }, [])

  return (
    <header ref={header} className="header">
      <nav className="nav container">
        {/*<a href="index.html" className="nav__logo">
          Sharma
        </a>*/}

        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            {/*<li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
              </li>*/}
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setShowMenu(false)}
          ></i>
        </div>

        <div className="nav__toggle">
          <i
            className="uil uil-apps"
            onClick={() => setShowMenu(!showMenu)}
          ></i>
        </div>
      </nav>
      <button
        className="toggleDark"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? 
          <i className='bx bxs-sun' ></i>
            : 
          <i className='bx bxs-moon' ></i>}
        </button>
    </header>
  );
};
export default header;
