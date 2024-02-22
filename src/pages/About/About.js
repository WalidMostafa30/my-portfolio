import React from "react";
import "./About.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoice,
  faLocationDot,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className="About" id="About">
      <GlobalTitle title={"My About"} description={"My Introduction"} />
      <div className="About__container container">
        <div className="About__img">
          <img src={require("../../Images/profile-2.jpg")} alt="img" />
        </div>
        <div className="About__info">
          <div className="About__info-boxs">
            <div className="About__info-box">
              <FontAwesomeIcon icon={faUserGraduate} />
              <h3>Education</h3>
              <p>BACHELOR'S DEGREE IN COMPUTER SCIENCE</p>
              <p>GRADUATION YEAR: 2022 - 2023</p>
            </div>

            <div className="About__info-box">
              <FontAwesomeIcon icon={faLocationDot} />
              <h3>Location</h3>
              <p>Egypt, Mansoura</p>
            </div>
          </div>
          <div className="About__info-article">
            <p>
              Hello and welcome! My name is Walid Mostafa, and I am passionate
              about crafting engaging and user-friendly experiences on the web.
              As a frontend developer, I specialize in bringing designs to life
              with clean, efficient, and responsive code.
            </p>
            <a href="#d" className="my-big-btn">
              Downloud CV <FontAwesomeIcon icon={faFileInvoice} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
