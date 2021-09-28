import { Link } from "gatsby";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import urljoin from "url-join";
import Arrow from "../../assets/right-down.svg";

function HirePledges() {
  const { HPImage } = useStaticQuery(graphql`
    query HPPageQuery {
      HPImage: file(relativePath: { eq: "HowItWorks/hero-how-it-works.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <div className="bg-format-background">
      {/*Mobile headline*/}
      <div className="block lg:hidden flex-col">
        <div id="mobile" className="flex items-center">
          <div id="Image" className="w-full z-5">
            <Img
              style={{ position: "relative" }}
              className="relative mb-10 object-cover object-center filter brightness-50"
              fluid={HPImage.childImageSharp.fluid}
            />
          </div>

          <div className="absolute flex flex-row space-x-6 m-10 z-10 text-heading-2 font-heading text-white ">
            <div
              id="vertical line"
              className="absolute bg-format-secondary h-full w-1 z-11"
            ></div>
            <h className="">Hire Pledges on Job Connect</h>
          </div>
        </div>
        <div className="relative px-10">
          <button className=" bg-format-secondary  w-full h-12 text-white">
            Sign Up
          </button>
        </div>
      </div>

      {/*Page headline*/}
      <div
        id="first-section"
        className="hidden lg:block relative bg-format-background overflow-hidden mb-3"
      >
        <div id="two-way divider" className="flex justify-between">
          <div id="left-side" className="z-10 flex flex-col">
            <div
              id="headline"
              className="absolute flex space-x-12 pl-8 mx-10 xl:mx-24 mt-52"
            >
              <div
                id="vertical line"
                className="absolute bg-format-secondary h-full w-1.5"
              />
              <p className="text-heading-1 font-heading">
                <span>Hire&nbsp;</span>
                <span className="white">IEJL Pledges&nbsp;</span>
                <br />
                <span>on&nbsp;J</span>
                <span className="white">ob Connect</span>
              </p>
              <button className="absolute mx-0 mt-72 bg-format-secondary w-28 h-12 text-white justify-start">
                Sign Up
              </button>
            </div>
          </div>

          <div id="Image" className="w-4/5 z-5">
            <Img
              style={{ position: "relative" }}
              className="relative overflow-hidden flex-none object-cover object-center overflow-hidden"
              fluid={HPImage.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>

      <div
        id="second-section"
        className="flex flex-col justify-start m-10 sm:m-24"
      >
        <p className="text-heading-2 font-heading">Why hire an IEJL Pledge?</p>
        <p className="lg:w-1/2 text-justify">
          Increase brand value and connect with a community of ethically
          conscious job seekers. Hiring an IEJL Pledge is a very public way to
          show your business supports ethical commerce and take action toward
          abating corruption.
        </p>
      </div>

      <div
        id="section-three"
        className="bg-format-primary sm:px-5 lg:px-20 pb-2"
      >
        <div className="flex pt-10 lg:py-20 w-full justify-center lg:justify-start">
          <text className="text-heading-2 font-heading text-white">
            How it works
          </text>
        </div>
        <div
          id="three-way-grid-2"
          className="bg-format-primary flex flex-col space-y-10 lg:grid lg:grid-cols-3 lg:px-20"
        >
          <div id="empty-col" className="hidden lg:block p-32" />

          <div
            id="01"
            className="flex flex-col space-y-3 px-5 lg:items-end lg:justify-start lg:border-r-8 lg:border-dotted"
          >
            <text className="text-format-secondary text-lg font-black">01</text>
            <text className="lg:text-right leading-7">
              <span className="text-heading-3 font-heading text-white">
                Register{" "}
              </span>
              <span className="text-medium text-white opacity-80 pb-4">
                for Job Connect as an employer to post open positions.
              </span>
            </text>
          </div>

          <div
            id="02"
            className="flex flex-col space-y-3 items-start justify-end px-5"
          >
            <text className="text-format-secondary text-lg font-black">02</text>
            <text className="leading-7">
              <span className="text-heading-3 font-heading text-white">
                The platform{" "}
              </span>

              <span className="text-medium text-white opacity-80 pb-4">
                works like other job sites, but employers can see
                candidates&apos; Award Level.
              </span>
            </text>
          </div>
        </div>
      </div>
      <div
        id="section-four"
        className="bg-format-background sm:px-5 lg:px-20 pb-16"
      >
        <div
          id="three-way-grid-2"
          className=" flex flex-col space-y-2 lg:grid lg:grid-cols-3 lg:px-20"
        >
          <div id="empty-col" className="hidden lg:block p-40" />

          <div
            id="03"
            className="flex flex-col space-y-3 px-5 lg:items-end justify-start lg:border-r-8 lg:border-dotted lg:border-black"
          >
            <text className="text-format-secondary text-lg font-black">03</text>
            <text className="lg:text-right leading-7">
              <span className="text-medium opacity-80 pb-4">The </span>
              <span className="text-heading-3 font-heading">Award Level </span>
              <span className="text-medium opacity-80">
                (Bronze, Silver, Gold, or Platinum) is earned by growing ethical{" "}
              </span>
              <br />
              <span className="text-medium opacity-80">awareness.</span>
            </text>
          </div>

          <div
            id="02"
            className="flex flex-col space-y-3 items-start justify-end px-5"
          >
            <text className="text-format-secondary text-lg font-black">04</text>
            <text className="leading-7">
              <span className="text-heading-3 font-heading">Once hired</span>
              <span className="text-medium opacity-80 pb-4">
                , Pledges are well-positioned to help transform or maintain a
                company&apos;s ethics.
              </span>
            </text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HirePledges;
