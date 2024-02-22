import React from "react";
import "./Contact.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <section className="Contact" id="Contact">
      <GlobalTitle title={"Contact Me"} description={"Get In Touch"} />
      <div className="Contact__container container">
        <div className="Contact__talk-box" data-aos="fade-right">
          <FontAwesomeIcon icon={faEnvelope} />
          <h4>E-mail</h4>
          <p>walidmoustafa436@gmail.com</p>
        </div>

        <div className="Contact__talk-box" data-aos="fade-up">
          <FontAwesomeIcon icon={faWhatsapp} />
          <h4>Whatsapp</h4>
          <p>0106 525 4159</p>
        </div>

        <div className="Contact__talk-box" data-aos="fade-left">
          <FontAwesomeIcon icon={faFacebook} />
          <h4>Facebook</h4>
          <p>Walid Mostafa</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
