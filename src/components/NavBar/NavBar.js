import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [Dark, setDark] = useState("");

  const handleNav = () => setShowNav(!showNav);

  const handleDark = () => {
    if (Dark === "light") {
      document.body.classList.add("dark");
      setDark("dark");
      localStorage.setItem("PortfolioDarkMode", "dark");
    } else {
      document.body.classList.remove("dark");
      setDark("light");
      localStorage.setItem("PortfolioDarkMode", "light");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("PortfolioDarkMode")) {
      setDark(localStorage.getItem("PortfolioDarkMode"));
    } else {
      setDark("light");
    }

    if (Dark === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [Dark]);
  return (
    <div className="NavBar">
      <div className="NavBar__container container">
        <a className="NavBar__logo" href="#Home">
          Walid
        </a>

        <div
          className={showNav ? "NavBar__links open" : "NavBar__links"}
          onClick={handleNav}
        >
          <a className="NavBar__link active" href="#Home">
            Home
          </a>
          <a className="NavBar__link" href="#About">
            About
          </a>
          <a className="NavBar__link" href="#Skills">
            Skills
          </a>
          <a className="NavBar__link" href="#Projects">
            Projects
          </a>
          <a className="NavBar__link" href="#Contact">
            Contact
          </a>
        </div>

        <div className="NavBar__icons">
          <div className="NavBar__icon" onClick={handleDark}>
            <FontAwesomeIcon icon={Dark === "dark" ? faSun : faMoon} />
          </div>
          <div
            onClick={handleNav}
            className={showNav ? "NavBar__brg-icon open" : "NavBar__brg-icon"}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
