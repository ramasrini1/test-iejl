import React from "react";

function Text({ text }) {
  return (
    <span className="whitespace-nowrap">
      <p className="antialiased sm:subpixel-antialiased md:antialiased">
        {text}
      </p>
    </span>
  );
}

export default Text;
