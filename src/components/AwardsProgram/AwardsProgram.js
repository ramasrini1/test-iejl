import { Link } from "gatsby";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import urljoin from "url-join";

function AwardsProgram() {
  const { headerImage, newsLetterImage } = useStaticQuery(graphql`
    query AwardsProgramPageQuery {
      headerImage: file(relativePath: { eq: "awardsprogram/7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="relative lg:h-80 sm:h-64 h-32 overflow-hidden">
        <Img
          style={{ position: "absolute" }}
          className="absolute object-cover object-center h-full w-full"
          fluid={headerImage.childImageSharp.fluid}
        />
        <div className="absolute flex items-center justify-center w-full h-full p-5">
          <h3 className="lg:text-6xl sm:text-5xl text-4xl font-semibold text-white">
            Awards Program
          </h3>
        </div>
      </div>
      <div className="bg-white">
        <div className="main-container sm:my-24 my-8">
          <div className="flex flex-col items-center justify-center"></div>

          <p className="text-black-600 mt-8 text-left sm:text-xl text-sm">
            The Awards Program is designed to award our Pledges points for
            participating in various activities sponsored by IEJL. These
            activities serve to gradually increase our Pledge&apos;s level of
            ethical awareness and to plant the seeds for an ethically conscious
            community.
          </p>
          <p className="text-black-600 mt-8 text-left sm:text-xl text-sm">
            Pledges can achieve higher Awards Levels by earning more points.
            Higher Award Levels relate to greater opportunities and benefits for
            our Pledges. These rewards include deals and discounts provided by
            IEJL&apos;s supporting businesses and the chance to distinguish
            themselves to employers on our Job Connect career website. (These
            points will expire after 18 months to maintain engagement).
          </p>
          <p className="text-black-600 mt-8 text-left sm:text-l text-sm">
            <ul>
              <li>New Pledge: 0-200 points</li>
              <li>Bronze: 201-300 points</li>
              <li>Silver: 301-400 points</li>
              <li>Gold: 401-600 points</li>
              <li>Platinum: {">"} 600 points</li>
            </ul>
          </p>
          <p className="text-black-600 mt-8 text-left sm:text-xl text-sm">
            Check out the different engaging and entertaining ways to start
            earning points below!
          </p>

          <div className="flex flex-col items-center justify-center">
            <a
              href="/"
              className="inline-block bg-yellow-500 text-white mt-3 px-5 py-1.5 rounded-md text-center hover:bg-yellow-600 focus:outline-none"
            >
              Awards Program
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AwardsProgram;
