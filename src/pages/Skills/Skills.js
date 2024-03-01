import React from "react";
import "./Skills.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { skillsData } from "../../data/Data";
import Skill from "../../components/Skill/Skill";

const Skills = () => {
  return (
    <section className="Skills" id="Skills">
      <GlobalTitle title={"My Skills"} description={"My Technical Level"} />
      <div className="Skills__container container">
        <div className="Skills__box">
          <h3>FrontEnd Developer</h3>

          <div className="Skills__skills">
            {skillsData.map((skill, index) => {
              return <Skill key={index} skill={skill} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
