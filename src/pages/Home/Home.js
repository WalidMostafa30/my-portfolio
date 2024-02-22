import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <section className="Home" id="Home">
      <div className="Home__container container">
        <div className="Home__links">
          <a href="https://www.linkedin.com/in/walid-m0stafa-">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/WalidMostafa30">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100011538554307&mibextid=ZbWKwL">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <div className="Home_info">
          <p>Hello I'm</p>
          <h1>Walid Mostafa 🖐</h1>
          <h4>FrontEnd Developer</h4>
          <a href="#Contact" className="my-big-btn">
            Say Hello <FontAwesomeIcon icon={faPaperPlane} />
          </a>
        </div>
        <div className="Home_profile">
          <div className="Home_img"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
