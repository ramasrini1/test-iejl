/** @jsx jsx */
import { jsx } from "theme-ui";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function Banner() {
  const {
    headerImage,
    packageImage1,
    packageImage2,
    packageImage3,
    packageImage4,
    ctaImage1,
    platinumImage1,
    goldImage1,
    ctaImage2,
    newsLetterImage,
  } = useStaticQuery(graphql`
    query SponsorPageQuery {
      headerImage: file(relativePath: { eq: "sponsor/ab1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      packageImage1: file(relativePath: { eq: "sponsor/member-platinum.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      packageImage2: file(relativePath: { eq: "sponsor/member-gold.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      packageImage3: file(relativePath: { eq: "sponsor/member-silver.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      packageImage4: file(relativePath: { eq: "sponsor/member-bronze.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      ctaImage1: file(relativePath: { eq: "sponsor/4.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      platinumImage1: file(relativePath: { eq: "sponsor/logo1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      goldImage1: file(relativePath: { eq: "sponsor/logo2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      ctaImage2: file(relativePath: { eq: "sponsor/6.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      newsLetterImage: file(relativePath: { eq: "sponsor/7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
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
          style={{ position: "absolute" }}
          className="absolute object-cover object-center h-full w-full"
          fluid={headerImage.childImageSharp.fluid}
        />
        <div className="absolute flex items-center justify-center w-full h-full p-5">
          <div className="flex flex-col items-center">
            <h3 className="lg:text-6xl sm:text-5xl text-4xl font-semibold text-black-hakkei">
              Sponsers
            </h3>
            <p className="sm:text-2xl text-base text-centers font-medium text-black-hakkei mt-1">
              Join Our Mission to Abate Corruption
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="my-16 main-container sm:my-24">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl text-center lg:text-5xl sm:text-4xl text-black-hakkei">
              Join Us in Our Mission
            </h2>
            <p className="text-gray-600 mt-4 text-center sm:text-base text-sm">
              IEJL offers several levels of exposure and marketing opportunities
              for you and your company based on your donation amount. Not only
              does your support help us cultivate change, but allow us to
              recognize your organization among our community.
            </p>
            <p className="text-gray-600 text-center mt-4 sm:text-base text-sm">
              Check out our different sponsorship levels below to find the
              package for you!
            </p>
          </div>

          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-8 lg:gap-6 sm:gap-12 gap-8 mt-16">
            <div className="flex flex-col items-center space-y-3">
              <Img
                className="w-36 mb-1 h-full"
                fluid={packageImage1.childImageSharp.fluid}
              />
              <h4 className="my-3 text-2xl text-gray-600 sm:text-3xl">
                Platinum
              </h4>
              <p className="text-gray-600 text-center sm:text-base text-sm">
                The Platinum Sponsorship Package is rewarded to patrons of
                $25,001 or more.
              </p>
              <a
                href="/"
                className="bg-yellow-500 text-white mt-3 px-5 py-1.5 rounded-md text-center hover:bg-yellow-600 focus:outline-none"
              >
                Learn More
              </a>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Img
                className="w-36 mb-1 h-full"
                fluid={packageImage2.childImageSharp.fluid}
              />
              <h4 className="sm:text-3xl text-2xl text-gray-600 my-3">Gold</h4>
              <p className="text-gray-600 text-center sm:text-base text-sm">
                The Gold Sponsorship Package is rewarded to patrons of $15,001
                to $25,000.
              </p>
              <a
                href="/"
                className="bg-yellow-500 text-white mt-3 px-5 py-1.5 rounded-md text-center hover:bg-yellow-600 focus:outline-none"
              >
                Learn More
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Img
                className="w-36 mb-1 h-full"
                fluid={packageImage3.childImageSharp.fluid}
              />
              <h4 className="my-3 text-2xl text-gray-600 sm:text-3xl">
                Silver
              </h4>
              <p className="text-gray-600 text-center sm:text-base text-sm">
                The Silver Sponsorship Package is granted to patrons of $5,001
                to $15,000.
              </p>
              <a
                href="/"
                className="bg-yellow-500 text-white mt-3 px-5 py-1.5 rounded-md text-center hover:bg-yellow-600 focus:outline-none"
              >
                Learn More
              </a>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Img
                className="w-36 mb-1 h-full"
                fluid={packageImage4.childImageSharp.fluid}
              />
              <h4 className="my-3 text-2xl text-gray-600 sm:text-3xl">
                Bronze
              </h4>
              <p className="text-gray-600 text-center sm:text-base text-sm">
                The Bronze Sponsorship Package is rewarded to patrons of $1,001
                to $5,000.
              </p>
              <a
                href="/"
                className="bg-yellow-500 text-white mt-1 px-5 py-1.5 rounded-md text-center hover:bg-yellow-600 focus:outline-none"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative lg:h-72 sm:h-64 h-56 overflow-hidden">
        <Img
          style={{ position: "absolute" }}
          className="absolute object-cover object-center h-full w-full"
          fluid={ctaImage1.childImageSharp.fluid}
        />
        <div className="absolute flex items-center justify-center w-full h-full p-5">
          <div className="flex flex-col items-center max-w-4xl mx-auto space-y-6">
            <h3 className="lg:text-4xl sm:text-3xl text-2xl text-center font-medium text-white lg:leading-snug sm:leading-snug leading-snug">
              Support us in creating a culture of ethical commerce with our
              future leaders!
            </h3>
            <a
              href="/"
              className="bg-yellow-500 text-white sm:text-base text-sm uppercase mt-1 px-6 sm:py-3 py-2 rounded-md text-center hover:bg-yellow-600 focus:outline-none"
            >
              Become a Sponser
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="main-container sm:my-24 my-12">
          <h2 className="sm:text-4xl text-3xl text-yellow-500 text-center sm:mt-12 mt-7">
            Platinum
          </h2>
          <div className="grid grid-cols-1 gap-5 pt-5 pb-8 mt-5 border-t xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 md:gap-8">
            <div className="border border-gray-300">
              <div className="border p-1">
                <Img
                  className="object-cover object-center w-full h-72"
                  fluid={platinumImage1.childImageSharp.fluid}
                />
              </div>
              <div>
                <p className="bg-yellow-500 text-white text-lg text-center p-1">
                  James Valle & Company , CAPs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="main-container sm:my-24 my-12">
          <h2 className="sm:text-4xl text-3xl text-yellow-500 text-center sm:mt-12 mt-7">
            Gold
          </h2>
          <div className="grid grid-cols-1 gap-5 pt-5 pb-8 mt-5 border-t xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 md:gap-8">
            <div className="border border-gray-300">
              <div className="border">
                <Img
                  className="object-cover object-center w-full h-72"
                  fluid={goldImage1.childImageSharp.fluid}
                />
              </div>
              <div>
                <p className="bg-yellow-500 text-white text-lg text-center p-1">
                  James Valle & Company , CAPs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative sm:h-48 h-40 overflow-hidden">
        <Img
          style={{ position: "absolute" }}
          className="absolute object-cover object-center h-full w-full"
          fluid={ctaImage2.childImageSharp.fluid}
        />
        <div className="main-container mx-auto absolute left-0 right-0 flex items-center w-full h-full p-5">
          <div className="flex md:flex-row flex-col items-center justify-between w-full md:space-x-6">
            <h3 className="lg:text-2xl sm:text-xl text-lg sm:text-left text-center font-medium text-white leading-relaxed">
              Hire our Ethically Conscious Employees Today!
            </h3>
            <a
              href="/"
              className="bg-yellow-500  md:mt-0 mt-3 text-white sm:text-base text-sm uppercase px-6 md:py-3 py-2 rounded-md text-center hover:bg-yellow-600 focus:outline-none"
            >
              Find out more
            </a>
          </div>
        </div>
      </div>
      <div className="relative lg:h-80 sm:h-64 h-56 overflow-hidden">
        <Img
          style={{ position: "absolute" }}
          className="absolute object-cover  h-full w-full"
          fluid={newsLetterImage.childImageSharp.fluid}
        />
        <div className="absolute bg-white bg-opacity-80 flex items-center justify-center w-full h-full p-5">
          <div className="flex flex-col items-center">
            <h3 className="lg:text-4xl sm:text-4xl text-2xl font-thin text-gray-400">
              Newsletter
            </h3>
            <p className="sm:text-base text-sm sm:font-medium text-black-hakkei mt-2 text-center">
              Keep up with our always upcoming news and updates. Enter your
              e-mail and subscribe to our newsletter.
            </p>
            <form className="w-full mt-8">
              <div className="relative flex justify-end rounded-full  bg-white border-gray-300 w-full">
                <input
                  type="email"
                  className="absolute w-full h-full rounded-full border sm:pl-8 sm:pr-48 pr-36 pl-4 bg-transparent focus:border-yellow-500 focus:outline-none"
                />
                <button
                  type="button"
                  className="float-right bg-yellow-500 right-0 text-white sm:text-base text-sm uppercase sm:px-6 sm:py-3 px-3 py-2 rounded-full text-center hover:bg-yellow-600 focus:outline-none"
                >
                  Find out more
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
