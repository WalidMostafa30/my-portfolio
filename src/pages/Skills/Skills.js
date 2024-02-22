import React from "react";
import "./Skills.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { skillsData } from "../../data/Data";

const Skills = () => {
  return (
    <section className="Skills" id="Skills">
      <GlobalTitle title={"My Skills"} description={"My Technical Level"} />
      <div className="Skills__container container">
        <div className="Skills__box">
          <h3>FrontEnd Developer</h3>

          <div className="Skills__skills">
            {skillsData.map((skill, index) => {
              return (
                <div key={index} className="Skills__skill" data-aos-delay="500">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <div className="Skills__skillName">
                    <h4>{skill.name}</h4>
                    <p>{skill.rate}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
