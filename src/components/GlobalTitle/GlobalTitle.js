import React from "react";
import "./GlobalTitle.css";

export default function GlobalTitle({ title, description }) {
  return (
    <div className="GlobalTitle">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
