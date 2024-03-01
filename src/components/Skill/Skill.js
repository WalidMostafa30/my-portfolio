import React from "react";
import "./Skill.css";

const Skill = ({ skill }) => {
  return (
    <div className="Skill">
      <div className="Skill__skillName">
        <h4>{skill.name}</h4>
        <p>{skill.deg} %</p>
      </div>
      <div className="Skill__rate">
        <span style={{ width: `${skill.deg}%` }}></span>
      </div>
    </div>
  );
};

export default Skill;
