import React from "react";
import "./TellMe.css";

const TellMe = () => {
  return (
    <article className="TellMe">
      <div className="TellMe__container container">
        <div className="TellMe__text">
          <h1>You have a new project!</h1>
          <h5>Contact me and tell me about your project</h5>
          <a href="#Contact" className="my-big-btn">Contact Me</a>
        </div>
        <img src={require("../../Images/Webinar-pana.png")} alt="img" />
      </div>
    </article>
  );
};

export default TellMe;
