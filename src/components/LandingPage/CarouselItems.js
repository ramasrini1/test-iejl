import React from "react";

function stories({ name, avatar, Comment, id }) {
  return (
    <div>
      <div className="flex flex-col space-y-10 sm:space-y-0 md:grid md:grid-cols-3 p-20">
        <div className="flex px-16 justify-start sm:justify-center items-start w-full sm:order-2">
          <img src={avatar} alt={name} />
        </div>
        <div className="flex flex-col text-white col-span-2 space-y-12 px-16 sm:order-1">
          <h className="text-2xl tracking-wider font-black">{name}</h>
          <p className="tracking-wide md:h-32">{Comment}</p>
        </div>
      </div>
    </div>
  );
}

export default stories;
