import { Link } from "gatsby";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function Missions() {
  const {
    platinumImage1,
    goldImage1,
    headerImage,
    memberImage1,
    memberImage2,
    memberImage3,
    memberImage4,
    memberImage5,
    memberImage6,
  } = useStaticQuery(graphql`
    query AboutPageQuery {
      headerImage: file(relativePath: { eq: "about/ab1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      memberImage1: file(relativePath: { eq: "about/1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      memberImage2: file(relativePath: { eq: "about/2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      memberImage3: file(relativePath: { eq: "about/3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      memberImage4: file(relativePath: { eq: "about/4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      memberImage5: file(relativePath: { eq: "about/5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      memberImage6: file(relativePath: { eq: "about/6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      platinumImage1: file(relativePath: { eq: "about/logo1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      goldImage1: file(relativePath: { eq: "about/logo2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
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
          className="absolute object-cover object-center h-full w-full"
          style={{ position: "absolute" }}
          fluid={headerImage.childImageSharp.fluid}
        />
        <div className="absolute flex items-center justify-center w-full h-full p-5">
          <h3 className="lg:text-6xl sm:text-5xl text-4xl font-semibold text-black-hakkei">
            About Us
          </h3>
        </div>
      </div>

      <div className="bg-white sm:my-16 my-10">
        <div className="main-container">
          <div className="border sm:p-12 p-6 shadow-xl rounded-xl">
            <div>
              <h2 className="sm:text-2xl text-xl text-black-hakkei">
                Who Are We IEJL?
              </h2>
              <p className="text-gray-600 mt-4 sm:text-base text-sm">
                The International Economic Justice League, Inc. (IEJL) is a
                California nonprofit 501 (c)(3) corporation, founded in 2016,
                with the mission to abate corruption. Our goal is to focus on
                the leaders of tomorrow by forming a group of ethically-minded
                individuals who want to join in the fight against corruption.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="sm:text-2xl text-xl text-black-hakkei">
                How Does It Work?
              </h2>
              <p className="text-gray-600 mt-4 sm:text-base text-sm">
                Once you register as a pledge (free of charge!) on our website,
                you may earn points through interacting with anti-corruption
                content in a variety of formats including music, videos,
                creative writing, and recent news articles. Pledges earn points
                as they become more ethically aware, and those accumulated
                points can give you discounts to restaurants and stores!
              </p>
              <p className="text-gray-600 mt-4 sm:text-base text-sm">
                In addition, you can join or create a chapter at your
                university, school, or city. Pledges can also earn points by
                attending community-building activities, which may include
                member meetings, retreats, community service, campus outreach,
                and social outings.
              </p>
              <p className="text-gray-600 mt-4 sm:text-base text-sm">
                IEJL also runs a job connection portal, IEJL Job Connect, that
                enables ethically conscious businesses to attract and hire
                pledges that also support ethical commerce.
              </p>
              <p className="text-gray-600 mt-4 sm:text-base text-sm">
                Interested? Then
                <a href="/" className="text-blue-500 hover:underline">
                  Join Us
                </a>
                in the fight against corruption!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="main-container sm:my-24 my-16">
          <div className="flex flex-col items-center max-w-2xl mx-auto">
            <h2 className="sm:text-4xl text-3xl font-semibold text-black-hakkei uppercase text-center">
              IEJL in Action
            </h2>
            <p className="text-gray-400 mt-4 sm:text-lg text-sm text-justify">
              The International Economics Justice League strives to create an
              ethical community of future leaders. See our organization hard at
              work, raising awareness of corruption and promoting ethical
              business practices.
            </p>
            <div className="pb-0.5 bg-green-500 w-28 mt-5"></div>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-5 sm:mt-24 sm:mt-16 mt-10 pb-8">
            <div>
              <Img
                className="object-cover object-center w-full h-72"
                fluid={memberImage1.childImageSharp.fluid}
              />
            </div>
            <div>
              <Img
                className="object-cover object-center w-full h-72"
                fluid={memberImage2.childImageSharp.fluid}
              />
            </div>
            <div>
              <Img
                className="object-cover object-center w-full h-72"
                fluid={memberImage3.childImageSharp.fluid}
              />
            </div>
            <div>
              <Img
                className="object-cover object-center w-full h-72"
                fluid={memberImage4.childImageSharp.fluid}
              />
            </div>
            <div>
              <Img
                className="object-cover object-center w-full h-72"
                fluid={memberImage5.childImageSharp.fluid}
              />
            </div>
            <div>
              <Img
                className="object-cover object-center w-full h-72"
                fluid={memberImage6.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="main-container sm:my-24 my-12">
          <div className="flex flex-col items-center max-w-2xl mx-auto">
            <h2 className="sm:text-4xl text-3xl font-semibold text-gray-500 uppercase text-center">
              Advisor
            </h2>
            <div className="pb-0.5 bg-green-500 w-28 mt-5"></div>
          </div>
          <div>
            <h2 className="sm:text-4xl text-3xl text-yellow-500 text-center sm:mt-12 mt-7">
              United States
            </h2>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-5 mt-5 pb-8 pt-5 border-t">
            <div className="border border-gray-300 p-3">
              <div className="border p-1">
                <Img
                  className="object-cover object-center w-full h-72"
                  fluid={memberImage1.childImageSharp.fluid}
                />
              </div>
              <div>
                <p className="text-gray-700 sm:text-xl text-lg text-center my-3">
                  Dr. Ann E. Tenbrunsel
                </p>
                <p className="text-gray-600 text-center sm:text-base text-sm">
                  David E. Gallo Professor of Business Ethics in the College of
                  Business Administration at the University of Notre Dame.
                </p>
              </div>
            </div>
            <div className="border border-gray-300 p-3">
              <div className="border p-1">
                <Img
                  className="object-cover object-center w-full h-72"
                  fluid={memberImage2.childImageSharp.fluid}
                />
              </div>
              <div>
                <p className="text-gray-700 sm:text-xl text-lg text-center my-3">
                  Dr. Chethan D. Srikant
                </p>
                <p className="text-gray-600 text-center sm:text-base text-sm">
                  Assistant Professor, Management Dept., Mihaylo College of
                  Business & Economics, California State University, Fullerton
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="main-container sm:my-24 my-12">
          <div className="flex flex-col items-center max-w-2xl mx-auto">
            <h2 className="sm:text-4xl text-3xl font-semibold text-gray-500 uppercase text-center">
              Our Sponsers
            </h2>
            <div className="pb-0.5 bg-green-500 w-28 mt-5"></div>
          </div>
          <div>
            <h2 className="sm:text-4xl text-3xl text-yellow-500 text-center sm:mt-12 mt-7">
              Platinum
            </h2>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-5 mt-5 pb-8 pt-5 border-t">
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
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-5 mt-5 pb-8 pt-5 border-t">
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
    </>
  );
}

export default Missions;
