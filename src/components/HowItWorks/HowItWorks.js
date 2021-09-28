import { Link } from "gatsby";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import urljoin from "url-join";
import Arrow from "../../assets/right-down.svg";

function HowItWorks() {
  const { HiWImage } = useStaticQuery(graphql`
    query HiWPageQuery {
      HiWImage: file(relativePath: { eq: "HowItWorks/hero-how-it-works.png" }) {
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
      <div className="block md:hidden">
        <div id="mobile" className="flex items-center">
          <div id="Image" className="w-full z-5">
            <Img
              style={{ position: "relative" }}
              className="relative mb-10 object-cover object-center"
              fluid={HiWImage.childImageSharp.fluid}
            />
          </div>
          <div id="mobile-headline" className="absolute flex items-center space-x-6 m-10 z-10">
            <div
              id="vertical line"
              className="bg-format-secondary h-32 w-2 z-11"
            ></div>
            <text className="text-heading-2 font-heading text-white">
              <span>How IEJL works</span>
            </text>
          </div>

        </div>
        <div className="relative px-14 pt-2">
          <p className="text-md  lg:leading-7">
            Our mission is to abate
            corruption by building a culture
            of ethical practices
            that improves quality of life for
            all. To do so, we are creating a
            strong, engaged community of
            future leaders committed to
            ethical commerce.
          </p>
        </div>
      </div>

      {/*Page headline*/}
      <div id="first-section" className="hidden md:block relative bg-format-background overflow-hidden mb-3">
        <div id="two-way divider" className="flex justify-between space-x-24">
          <div id="left-side" className="z-10">
            <div
              id="headline"
              className="flex items-center space-x-12 mx-10 xl:mx-40 mt-52"
            >
              <div
                id="vertical line"
                className="bg-format-secondary h-20 w-2"
              ></div>
              <text className="absolute flex text-heading-1 pl-2 font-heading">
                <span>How IEJL&nbsp;</span>
                <span className="white">works</span>
              </text>
            </div>
            <div className="absolute ml-10 xl:ml-40 w-full mt-10">
              <p className="text-sm xl:text-regular lg:leading-7">
                Our mission is to abate
                <br />
                corruption by building a culture
                <br />
                of ethical practices
                <br />
                that improves quality of life for
                <br />
                all. To do so, we are creating a<br />
                strong, engaged community of
                <br />
                future leaders committed to
                <br />
                ethical commerce.
              </p>
            </div>
          </div>
          <div id="Image" className="w-full flex-none pl-20 z-5">
            <Img
              style={{ position: "relative" }}
              className="relative overflow-hidden  object-cover object-center overflow-hidden"
              fluid={HiWImage.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>

      <div id="second-section">
        <div id="three-way grid" className="flex flex-col md:grid md:grid-cols-3 gap-5 md:gap-44 lg:ml-64 px-10 py-5 md:p-20">
          <div
            id="pledges"
            className="flex flex-col items-start justify-between space-y-5 px-1"
          >
            <text className="text-md xl:text-bold font-black">Pledges(Individuals)</text>
            <text className="text-sm xl:text-regular leading-7">
              Make new friends, learn to identify corruption and its impact on
              society, earn rewards, and access the best jobs in the world
            </text>
            <button>
              <text className="text-format-secondary font-bold text-md">
                Sign Up -&gt;
              </text>
            </button>
          </div>

          <div
            id="partners"
            className="flex flex-col items-start justify-between space-y-5 px-1"
          >
            <text className="text-md xl:text-bold font-black">Business Partners</text>
            <text className="text-sm xl:text-regular leading-7">
              Increase brand value, build custumer awareness, gain new
              customers, and support ethical business practices.
            </text>
            <button>
              <text className="text-format-secondary font-bold text-md">
                Sign Up -&gt;
              </text>
            </button>
          </div>

          <div
            id="employers"
            className="flex flex-col items-start justify-between space-y-5 px-1"
          >
            <text className="text-md xl:text-bold font-black">Employers</text>
            <text className="text-sm xl:text-regular leading-7">
              Increase brand value and connect with a community of ethically
              conscious job seekers.
            </text>
            <button>
              <text className="text-format-secondary font-bold text-md">
                Sign Up -&gt;
              </text>
            </button>
          </div>
        </div>
      </div>

      <div id="section-three">
        <div
          id="three-way-grid-2"
          className="bg-format-primary flex flex-col lg:grid lg:grid-cols-3 gap-20 xl:gap-32 sm:m-0 xl:mr-64 px-10 py-5 xl:p-20"
        >
          <div
            id="01"
            className="flex flex-col items-start justify-start space-y-5"
          >
            <text className="text-format-secondary text-bold font-black">
              01
            </text>
            <text className="text-heading-3 font-heading text-white">
              Pledges
            </text>
            <text className="text-bold text-white pb-4">
              earn points through
            </text>
            <text className="text-regular text-white leading-7">
              <p>Engaging with fun and interesting content in our library</p>
              <p>Chapter involvement</p>
              <p>Being active on IEJL Live!</p>
              <p>Volunteering</p>
            </text>
          </div>

          <div
            id="02"
            className="flex flex-col items-start justify-start space-y-5"
          >
            <text className="text-format-secondary text-bold font-black">
              02
            </text>
            <text className="text-heading-3 font-heading text-white">
              Award Levels
            </text>
            <text className="text-bold text-white pb-4">
              <br />
            </text>
            <text className="text-regular text-white leading-7">
              <p>Platinum</p>
              <p>Gold</p>
              <p>Silver</p>
              <p>Bronze</p>
            </text>
          </div>

          <div
            id="03"
            className="flex flex-col items-start justify-start space-y-5"
          >
            <text className="text-format-secondary text-bold font-black">
              03
            </text>
            <text className="text-heading-3 font-heading text-white leading-10">
              Merchants and Employers
            </text>
            <text className="text-bold text-white pb-4">
              <br />
            </text>
            <text className="text-regular text-white leading-7">
              <p>Offer discounts based on Pledge Award level</p>
              <p>Consider Pledge Award level in hiring decisions</p>
            </text>
          </div>
        </div>
      </div>

      <div id="section-four">
        <div className="px-16 py-16 md:pr-96 bg-format-background">
          <text className="flex font-heading text-heading-3 md:text-heading-2 text-format-text pr-20 md:pr-5 xl:pr-96">
            Pledges have full access to IEJL Programs
          </text>
        </div>
        <div id="programs" className="mr-8 ml-8 md:mx-24">
          <div
            id="line"
            className="h-px mb-16 bg-format-primary opacity-50"
          ></div>
          <div id="programs-list">
            <div className="flex flex-col md:grid md:grid-cols-3 md:items-end pb-12">
              <div className="flex flex-row justify-between items-center">
                <text className="font-heading text-heading-3">
                  The IEJL Library
                </text>
                <Arrow className="block md:hidden w-8 h-8" />
              </div>
              <div className="flex justify-between items-end col-span-2">
                <text className="text-regular pr-16 md:pl-10 lg:pr-48">
                  A fun and engaging community curated Library designed to help
                  you identify corruption, understand its impact, and take
                  action.
                </text>
                <Arrow className="hidden md:block w-10 h-10 flex-none" />
              </div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 md:items-end pb-12">
              <div className="flex flex-row justify-between items-center">
                <text className="font-heading text-heading-3">
                  IEJL Chapters
                </text>
                <Arrow className="block md:hidden w-8 h-8" />
              </div>
              <div className="flex justify-between items-end col-span-2">
                <text className="text-regular pr-16 md:pl-10 lg:pr-48">
                  Join a local chapter to connect in-person with local Pledges,
                  attend events, form friendships, and support each other in
                  anti-corruption efforts.
                </text>
                <Arrow className="hidden md:block w-10 h-10 flex-none" />
              </div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 md:items-end pb-12">
              <div className="flex flex-row justify-between items-center">
                <text className="font-heading text-heading-3">
                  IEJL Live!
                </text>
                <Arrow className="block md:hidden w-8 h-8" />
              </div>
              <div className="flex justify-between items-end col-span-2">
                <text className="text-regular pr-16 md:pl-10 lg:pr-48">
                  A secure, ad-free social network.
                  Stay in touch with local Pledges as well as our
                  global community, join discussions, and play games.
                </text>
                <Arrow className="hidden md:block w-10 h-10 flex-none" />
              </div>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-3 md:items-end pb-12">
              <div className="flex flex-row justify-between items-center">
                <text className="font-heading text-heading-3">
                  Pledge Discounts
                </text>
                <Arrow className="block md:hidden w-8 h-8" />
              </div>
              <div className="flex justify-between items-end col-span-2">
                <text className="text-regular pr-16 md:pl-10 lg:pr-48">
                  Get discounts on products and services from your favorite ethical brands.
                  Discounts based on your Award Level.
                </text>
                <Arrow className="hidden md:block w-10 h-10 flex-none" />
              </div>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-3 md:items-end pb-12">
              <div className="flex flex-row justify-between items-center">
                <text className="font-heading text-heading-3">
                  IEJL Job Connect
                </text>
                <Arrow className="block md:hidden w-8 h-8" />
              </div>
              <div className="flex justify-between items-end col-span-2">
                <text className="text-regular pr-16 md:pl-10 lg:pr-48">
                  Access an exclusive job board where your Award Level will help you gain
                  visibility and trust with employers.
                </text>
                <Arrow className="hidden md:block w-10 h-10 flex-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="section-five">
        <div id="two-way-5th" className="flex flex-col pr-5 pl-5 md:justify-between md:space-x-32 md:flex-row md:px-20">
          <div id="left-side" className="p-4 md:py-32">
            <div className="flex flex-col">
              <text className="text-heading-3 md:text-heading-2 font-heading xl:px-2">
                More ways to
              </text>
              <text className="bg-format-secondary text-heading-3 md:text-heading-2 font-heading text-white px-2">
                make an impact
              </text>
            </div>
          </div>
          <div id="right-side" className="flex flex-row items-center">
            <div className="grid grid-row-3 gap-20 p-4 md:pr-10">
              <div>
                <p className="text-regular">
                  Help IEJL grow and empower more individuals like you.
                </p>
                <button className="font-black text-format-secondary underline">
                  Become a Volunteer
                </button>
              </div>
              <div>
                <p className="text-regular">
                  Support IEJL&apos;s international community as a sponsor.
                </p>
                <button className="font-black text-format-secondary underline">
                  Become a Sponsor
                </button>
              </div>
              <div>
                <p className="text-regular">
                  Contribute to a future without corruption.
                </p>
                <button className="font-black text-format-secondary underline">
                  Make a Donation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
