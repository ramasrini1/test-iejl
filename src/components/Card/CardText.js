import React from "react";
import "./CardText.css";

export default function CardText({ description }) {
  return (
    <div
      className="relative  flex md:flex-nowrap lg:flex-nowrap lg:w-60 lg:h-12 
                      lg:p-2 md:w-60 md:h-10 md:p1 sm:w-72 sm:h-12 items-start 
                      item-center  bg-yellow text-white"
    >
      {description}
    </div>
  );
}
