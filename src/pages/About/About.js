import React from "react";
import "./About.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoice,
  faLocationDot,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import GlobalCard from "../../components/GlobalCard/GlobalCard";
import CV from "../../Images/Walid-CV.pdf";
import {  faHourglassHalf } from "@fortawesome/free-regular-svg-icons";

const About = () => {
  return (
    <section className="About" id="About">
      <GlobalTitle title={"About Me"} description={"My Introduction"} />
      <div className="About__container container">
        <div className="About__img">
          <img src={require("../../Images/Hand coding-bro.png")} alt="img" />
        </div>
        <div className="About__info">
          <div className="About__info-boxs">
            <GlobalCard
              head={"Age"}
              icon={faHourglassHalf}
              info={"23 year"}
              class2={"About__info-box"}
            />
            <GlobalCard
              head={"Location"}
              icon={faLocationDot}
              info={"Egypt, Mansoura"}
              class2={"About__info-box"}
            />
            <GlobalCard
              head={"Education"}
              icon={faUserGraduate}
              info={"BACHELOR'S DEGREE IN COMPUTER SCIENCE"}
              info2={"GRADUATION YEAR: 2022 - 2023"}
              class2={"About__info-box"}
            />
          </div>
          <div className="About__info-article">
            <p>
              Hello and welcome! My name is Walid Mostafa, and I am passionate
              about crafting engaging and user-friendly experiences on the web.
              As a frontend developer, I specialize in bringing designs to life
              with clean, efficient, and responsive code.
            </p>
            <a download="" href={CV} className="my-big-btn">
              Downloud CV <FontAwesomeIcon icon={faFileInvoice} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
