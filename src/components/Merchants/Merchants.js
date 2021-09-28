import React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function Merchants() {
  const { bannerImage } = useStaticQuery(graphql`
    query merchantsPageQuery {
      bannerImage: file(relativePath: { eq: "about/ab1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 6000, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <div>
      <div className="relative lg:h-80 sm:h-64 h-32 overflow-hidden">
        <Img
          className="absolute object-cover object-center h-full w-full"
          style={{ position: "absolute" }}
          fluid={bannerImage.childImageSharp.fluid}
        />
        <div className="absolute flex items-center justify-center w-full h-full p-5">
          <h3 className="lg:text-6xl sm:text-4x1 font-semibold italic text-white">
            Our Merchants
          </h3>
        </div>
      </div>
      <div className="relative lg:h-80 sm:h-64 h-32 p-4 m-10 overflow-hidden text-black-hakkei">
        <div className="border-solid rounded-2xl border border-black shadow-lg max-w-5xl justify-center mr-auto ml-auto mb-10 p-4  lg:text-6x1 sm:text-4x1 text-center font-serif text-lg">
          <p className="mb-4 italic">
            <span>
              Search here for all of the retailers who support IEJL! If you have
              a favorite retailer, ask them to sign up with us on the Merchant
              Sign UP page!
            </span>
          </p>
          <p className="italic">
            <span>
              NOTE: You will only be shown discounts that are available to your
              rank. If you do not see a discount, earn more points to reveal
              your discounts!
            </span>
          </p>
        </div>
        <div className="max-w-5xl h-32 mr-auto ml-auto mb-5">
          <form className="grid grid-cols-6 gap-3 font-card text-sm">
            <div className="col-span-2 pr-2">
              <label>
                <p>Merchant Name:</p>
                <input
                  type="text"
                  name="merchantName"
                  className="w-full h-2/3 border-2 border-solid rounded-md border-gray"
                />
              </label>
            </div>
            <div>
              <label>
                <p>Country:</p>
                <select
                  name="merchant_country"
                  className="w-full h-2/3 border-2 border-solid rounded-md border-gray"
                >
                  <option value="select">Select</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                <p>Merchant State:</p>
                <select
                  name="merchant_state"
                  className="w-full h-2/3 border-2 border-solid rounded-md border-gray"
                >
                  <option value="select">Select</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                <p>Merchant City:</p>
                <select
                  name="merchant_city"
                  className="w-full h-2/3 border-2 border-solid rounded-md border-gray"
                >
                  <option value="select">Select</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                <p>Merchant Category:</p>
                <select
                  name="merchant_category"
                  className="w-full h-2/3 border-2 border-solid rounded-md border-gray"
                >
                  <option value="select">Select</option>
                </select>
              </label>
            </div>
            <a
              className="relative w-20 h-auto whitespace-nowrap inline-flex justify-evenly rounded-md bg-yellow-500 py-2 px-3 text-sm text-white hover:bg-opacity-90 hover:text-black"
              href="/"
            >
              search
            </a>
          </form>
        </div>
      </div>
      <div className="max-w-5xl m-auto mb-20 overflow-hidden">
        <div className="mb-5 grid grid-cols-2 gap-4">
          <div>
            <p className="text-2xl font-card text-yellow-500 mb-2">
              James Valle & Company, CPAs
            </p>

            <p className="font-card text-yellow-500 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              UNITED STATES | CALIFORNIA | NEWPORT BEACH | 4540
            </p>
            <p className="font-card text-yellow-500">
              {" "}
              CAMPUS DRIVE, SUITE 111
            </p>
            <p className="mb-3 font-card text-sm mt-2 text-blue">
              {" "}
              Income Tax Return Preparation
            </p>
            <button className="relative font-card w-35 whitespace-nowrap inline-flex justify-evenly rounded-md bg-indigo-900 py-2 px-3 text-sm text-white hover:bg-opacity-90 hover:text-black">
              Discounts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Merchants;
