import React from "react";
import "./GlobalTitle.css";

export default function GlobalTitle({ title, description }) {
  return (
    <div className="GlobalTitle">
      <h1 data-aos="fade-left">{title}</h1>
      <p data-aos="fade-right">{description}</p>
    </div>
  );
}
