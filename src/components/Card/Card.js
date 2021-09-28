import React from "react";
import "./Card.css";

export default function Card({ title, image, description }) {
  return (
    <div className="card flex flex-col items-center text-center">
      <div className="svg-wrapper flex justify-center mb-7">{image}</div>
      <h3 className="mb-2">{title}</h3>
      <div className="separator"></div>
      <desc>{description}</desc>
    </div>
  );
}
