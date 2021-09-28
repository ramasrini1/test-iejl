/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Carousel from "./Carousel";
import RightArrow from "../../assets/right-arrow.svg";
import "./LandingPage.css";

function LandingPage() {
  const { HiImage, sectionImage, volunteerImage, globeImage } =
    useStaticQuery(graphql`
      query HiPageQuery {
        HiImage: file(relativePath: { eq: "home/hero-homepage.png" }) {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        sectionImage: file(relativePath: { eq: "home/section-1.png" }) {
          childImageSharp {
            fluid(maxWidth: 768, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        volunteerImage: file(relativePath: { eq: "home/testman.png" }) {
          childImageSharp {
            fluid(maxWidth: 768, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        globeImage: file(relativePath: { eq: "home/section-6.png" }) {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `);

  return (
    <div className="bg-format-background">
      {/*Mobile headline*/}
      <div className="block md:hidden mb-24 px-10 pt-10">
        <div id="mobile" className="flex items-center">
          <div
            id="mobile-headline"
            className="relative flex items-center space-x-6 z-10"
          >
            <p className="w-full text-heading-2 font-heading overflow-visible">
              Stop <br /> corruption <br /> at
              <span className="bg-format-secondary text-white px-2 ml-2">
                its root
              </span>
            </p>
          </div>
        </div>
        <div className="relative pt-2">
          <p className="text-md  lg:leading-7">
            Build A Culture Of Ethical Commerce
          </p>
          <div className="flex flex-wrap justify-start items-center py-10 ">
            <div>
              <Link
                to="/login"
                className="bg-format-secondary text-medium font-regular hover:bg-format-primary text-white no-underline uppercase py-2 sm:py-2 px-3 sm:px-3 tracking-wide"
              >
                Sign Up
              </Link>
            </div>
            <div className="px-4">
              <Link
                to="/about"
                className="flex space-x-1 no-underline items-center"
              >
                <text className="text-format-secondary font-bold text-sm sm:text-md">
                  Learn More
                </text>
                <RightArrow />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*Page headline*/}
      <div className="hidden relative md:block bg-format-background overflow-hidden mb-3">
        <div className="relative flex items-center justify-end">
          <div className="relative z-10">
            <div className="relative xl:absolute transform translate-x-20 translate-y-10 xl:-translate-x-24 xl:-translate-y-0 xl:w-screen ">
              <p className="w-4/5 text-heading-2 xl:text-heading-1 font-heading overflow-visible">
                Stop corruption at
                <span className="parallel px-8 m-0 sm:-ml-4">its root</span>
              </p>
            </div>
            <div className="w-full flex flex-col pt-10 mb-10 xl:mt-32 transform translate-x-20 translate-y-10 xl:-translate-x-24 xl:-translate-y-0">
              <p className="text-sm xl:text-regular lg:leading-7">
                Build a culture of ethical commerce
              </p>
              <div className="flex flex-wrap justify-between items-center py-10">
                <div>
                  <Link
                    to="/login"
                    className="bg-format-secondary text-xs sm:text-medium font-regular hover:bg-format-primary text-white no-underline uppercase py-2 sm:py-2 px-3 sm:px-3 tracking-wide"
                  >
                    Sign Up
                  </Link>
                </div>
                <div className="px-4">
                  <Link
                    to="/about"
                    className="flex space-x-1 no-underline items-center"
                  >
                    <text className="text-format-secondary font-bold text-sm sm:text-md">
                      Learn More
                    </text>
                    <RightArrow />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div id="right-side" className="relative w-min-full w-2/3">
            <Img
              style={{ position: "relative" }}
              className=" overflow-hidden  object-contain object-center w-full z-5"
              fluid={HiImage.childImageSharp.fluid}
            />
            <div className="parallel"></div>
          </div>
        </div>
      </div>
      <div className="relative bg-format-primary transform translate-y-52 w-full pl-10 sm:pl-20 sm:mt-80">
        <div className="flex flex-wrap xl:grid xl:grid-cols-2 transform -translate-y-64 sm:-translate-y-72 lg:-translate-y-72 xl:-translate-y-80">
          <div className="w-full sm:w-3/4 xl:w-full">
            <Img
              style={{ position: "relative" }}
              className="absolute object-cover w-3/4 h-150"
              fluid={sectionImage.childImageSharp.fluid}
            />
          </div>
          <div className="w-full pr-20 mt-20">
            <div className="mt-10">
              <text className="text-heading-2 xl:text-heading-1 font-heading">
                <span>Corruption</span>
              </text>
              <br></br>
              <text className="text-heading-2 xl:text-heading-1 font-heading">
                <span>impacts all of us</span>
              </text>
              <div className="text-regular lg:text-bold tracking-wide font-thin leading-8 pr-8 text-format-background mt-10">
                In many companies and governments, corruption has become a
                culture. The consequences ripple out and have devastating
                effects on our communities, our environment, and our future.
                <br />
                <br />
                Change starts with shifting the culture.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-format-primary py-0">
        <div className="flex flex-wrap xl:grid xl:grid-cols-3 pl-10 sm:pl-20">
          <div className="w-full flex flex-col items-start justify-start xl:justify-end bg-format-primary py-20 sm:py-0 mb-10 sm:mb-0">
            <text className="text-heading-2 font-heading text-white">
              Join a lifelong
              <br />
              community of
            </text>
            <text className="block xl:hidden text-heading-2 font-heading text-format-background px-1 sm:px-2 bg-format-secondary">
              ethical leaders
            </text>
          </div>
          <div className="flex mx-0 sm:mx-20 xl:justify-end">
            <div className="grid grid-rows-3 border-t border-opacity-25 flex-none ">
              <div className="flex items-end text-heading-3 font-heading text-white">
                <p className="font-body text-3xl font-black">01</p>
              </div>
              <div>
                <div className="text-heading-3 font-heading text-white">
                  <span>Learn to earn</span>
                </div>
              </div>
              <div className="text-white flex items-end">
                <p>
                  Practice ethical awareness, earn <br />
                  points, and save on ethical brands.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start sm:mx-5 xl:mx-20">
            <div className="grid grid-rows-3 border-t border-opacity-25 flex-none bg-format-primary">
              <div className="flex items-end text-heading-3 font-heading text-white">
                <p className="font-body text-3xl font-black">02</p>
              </div>
              <div>
                <div className="text-heading-3 font-heading text-white">
                  <span>
                    Build lifelong
                    <br />
                    friendships
                  </span>
                </div>
              </div>
              <div className="text-white flex items-end">
                <p>
                  Join a global community thats <br />
                  building a community of ethical
                  <br />
                  commerce
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-format-background">
          <div className="flex flex-wrap xl:grid xl:grid-cols-3 bg-format-background pl-10 sm:pl-20">
            <div className="hidden xl:flex justify-start items-start">
              <text className="text-heading-2 font-heading text-format-background  bg-format-secondary">
                ethical leaders
              </text>
            </div>
            <div className="flex mx-0 sm:mx-20 xl:justify-end">
              <div className="grid grid-rows-3 border-t border-opacity-25 flex-none ">
                <div className="flex items-end text-heading-3 font-heading text-white">
                  <p className="font-body text-black text-3xl font-black">03</p>
                </div>
                <div>
                  <div className="text-heading-3 font-heading text-black">
                    <span>
                      Access career
                      <br /> oppurtunities
                    </span>
                  </div>
                </div>
                <div className="text-black flex items-end">
                  <p>
                    Find Jobs At Companies that have <br />a pledge against
                    corruption
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-start sm:mx-5 xl:mx-20">
              <div className="grid grid-rows-3 border-t border-opacity-25 flex-none">
                <div className="flex items-end text-heading-3 font-heading text-white">
                  <p className="font-body text-3xl font-black text-black">04</p>
                </div>
                <div>
                  <div className="text-heading-3 font-heading text-text-black">
                    <span>
                      Enjoy engaging
                      <br />
                      Content
                    </span>
                  </div>
                </div>
                <div className="text-text-black flex items-end">
                  <p>
                    Learn through film, music, and
                    <br /> stories curated by the community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-32 mx-10">
        <iframe
          width="800"
          height="520"
          src="https://www.youtube.com/embed/vx2773eSbec"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="relative w-full  bg-format-background mb-20">
        <div className="text-heading-2 font-heading px-5 sm:pl-20 mt-10 sm:mt-0">
          <span>Member Stories</span>
        </div>
      </div>

      <div className="relative w-full bg-format-primary my-10">
        <Carousel />
      </div>

      <div className="relative sm:px-20 sm:pt-32 pb-5">
        <Img
          style={{ position: "relative" }}
          className="absolute object-cover object-center h-full w-full"
          fluid={globeImage.childImageSharp.fluid}
        />
        <div className="absolute flex flex-col top-0 p-10">
          <h3 className="lg:text-6xl sm:text-5xl text-4xl font-heading">
            Thank you to our<br></br> supporting partners
          </h3>
          <div className="mt-10">
            <Link
              to="/sponsors"
              className="w-min mb-12 text-format-secondary font-semibold border-b-8 border-format-secondary hover:text-format-primary hover:border-format-primary no-underline tracking-wide"
            >
              Become a sponsor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
