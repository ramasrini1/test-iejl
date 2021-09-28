import React from "react";
import { FiX } from "react-icons/fi";

export default function Modal(props) {
  return (
    <>
      <div className={props.show ? "z-100 opacity-100 visible fixed top-1/2 left-1/2 w-5/6 lg:w-200 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200" : "z-100 opacity-0 invisible fixed top-1/2 left-1/2 w-5/6 lg:w-200 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200"}>
        <div className="relative flex flex-col h-96 lg:h-110 p-10 bg-white shadow-lg">
          <div className="absolute self-end text-2xl">
            <FiX className="hover:text-format-secondary cursor-pointer" onClick={props.handler} />
          </div>
          <div className="flex flex-col my-auto px-10 lg:px-24">
            <div className="self-center text-center">
              <h3 className="pt-8 font-heading text-2xl sm:text-3xl lg:text-4xl text-black-hakkei pt-0 pb-2">
                {props.question}
              </h3>
            </div>
            <div className="text-sm sm:text-md lg:text-base">
              {props.answer}
            </div>
          </div>
        </div>
      </div>
      <div className={props.show ? "z-75 opacity-20 visible fixed top-0 left-0 w-screen h-screen bg-black transition-all duration-200" : "z-75 opacity-0 invisible fixed top-0 left-0 w-screen h-screen bg-black transition-all duration-200"} onClick={props.handler} />
    </>
  );
}