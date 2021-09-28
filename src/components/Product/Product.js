/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function Product() {
  return (
    <>
      <div className="flex justify-around md:items-center text-white py-4 mt-8 my-auto">
        <div className="text-content">
          <span className="flex flex-col lg:flex-row sm:justify-center">
            <h4 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">
              Under Construction
            </h4>
          </span>
        </div>
      </div>
    </>
  );
}

export default Product;
