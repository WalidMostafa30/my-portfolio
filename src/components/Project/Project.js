import React from "react";
import "./Project.css";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({ pro }) => {
  return (
    <div className="Portfolio__project">
      <div className="Portfolio__project-img">
        <img src={pro.img} alt="img" />
        <div className="Portfolio__project-btns">
          <a href={pro.github} className="Portfolio__project-btn">
            GitHub
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={pro.demo} className="Portfolio__project-btn">
            Demo
            <FontAwesomeIcon icon={faEye} />
          </a>
        </div>
      </div>
      <h4 className="Portfolio__project-title">{pro.title}</h4>
    </div>
  );
};

export default Project;
