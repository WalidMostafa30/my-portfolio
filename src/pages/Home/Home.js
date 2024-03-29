import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <section className="Home" id="Home">
      <div className="Home__container container">
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
