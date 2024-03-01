import React from "react";
import "./GlobalCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GlobalCard = ({ icon, head, info, info2, class2 }) => {
  const classname = `GlobalCard ${class2}`;
  return (
    <div className={classname}>
      <FontAwesomeIcon icon={icon} />
      <h3>{head}</h3>
      <p>{info}</p>
      <p>{info2}</p>
    </div>
  );
};

export default GlobalCard;
