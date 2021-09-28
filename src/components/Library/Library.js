import { Link } from "gatsby";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export default function Connect() {
  const {
    libraryHeaderImage,
    libraryMidImage,
    librarySketchImage,
    connectHeaderImage,
    connectMidImage,
    tvImage,
    bookImage,
    rewardOneImage,
    rewardTwoImage,
    rewardThreeImage,
    rewardFourImage,
  } = useStaticQuery(graphql`
    query LibraryPageQuery {
      libraryHeaderImage: file(
        relativePath: { eq: "library/hero-library.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      libraryMidImage: file(relativePath: { eq: "library/2b-section-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      tvImage: file(relativePath: { eq: "library/image30.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bookImage: file(relativePath: { eq: "library/image29.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      librarySketchImage: file(
        relativePath: { eq: "library/2b-section-4.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <section className="bg-format-background">
      <div className="relative h-screen">
        <Img
          style={{ position: "" }}
          className="object-contain object-center h-full"
          fluid={libraryHeaderImage.childImageSharp.fluid}
        />
        <div className="absolute top-1/4 ml-6 lg:ml-44 mr-6 z-10">
          <div className="border-l-4 border-format-secondary pl-10 py-3 sm:py-4 lg:py-5">
            <h3 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white">
              A Library curated
            </h3>
            <h3 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white">
              by our
            </h3>
            <h3 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white">
              community
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="pt-20 pl-4 lg:pl-32 pr-4 lg:pr-32 xl:pr-0 w-full xl:w-1/2">
          <h4 className="p-2 font-heading text-5xl sm:text-6xl lg:text-7xl text-black-hakkei">
            Learn through edutainment
          </h4>
          <div className="p-2 mt-20">
            <text className="text-md sm:text-lg lg:text-xl text-black-hakkei">
              Learn to identify corruption, understand its impact, and take
              action through pop culture and media. Simply select materials you
              enjoy, answer a few multiple-choice questions, and earn points.
              Prefer traditional materials like case studies and courses? We’ve
              got you covered!
            </text>
          </div>
          <div className="p2 mt-10 pb-8">
            <text className="text-md sm:text-lg lg:text-xl text-black-hakkei">
              Earning more points helps you reach the next Award Level. Points
              are valid for 18 months.
            </text>
          </div>
        </div>
        <div className="relative pl-4 lg:pl-32 pr-4 lg:pl-32 pr-32 xl:pr-0 bg-format-primary">
          <div className="p-2 w-full xl:w-1/2">
            <h2 className="p-2 mt-20 font-heading text-5xl sm:text-6xl lg:text-7xl text-white">
              How to use the library?
            </h2>
            <div className="mt-5 pb-10">
              <text className="text-md sm:text-lg lg:text-xl text-white">
                Search by your favorite media type or browse formal coursework
                to work toward a certificate in specific aspects of
                anti-corruption.
              </text>
            </div>
          </div>
          <div className="absolute bottom-40 right-36 hidden xl:block">
            <Img
              style={{ position: "" }}
              className="object-contain object-center w-110"
              fluid={libraryMidImage.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>

      <div className="hidden md:block lg:block bg-format-background h-full w-full">
        <div className="flex flex-wrap flex-row  mt-20 pl-20 gap-10">
          <div className="p-2 pl-20  w-1/3 bg-format-primary">
            <div className="flex  pr-10 justify-center  ">
              <Img
                style={{ position: "" }}
                className="mt-5 object-contain object-center w-40"
                fluid={bookImage.childImageSharp.fluid}
              />
            </div>
            <div align="center" className="flex flex-col ">
              <div>
                <div className="p-5 mb-5 mt-5 font-heading text-5xl sm:text-4xl lg:text-6xl text-white">
                  Traditional Learning
                </div>
              </div>
              <div className="text-white">News Articles</div>
              <div className="text-white">Case Studies</div>
              <div className="text-white">Research Projects</div>
            </div>
          </div>
          <div className="col-span-2 w-3/5 bg-format-primary">
            <div className="flex pl-20 pr-10 justify-center ">
              <Img
                style={{ position: "" }}
                className="mt-5 object-contain object-center w-40"
                fluid={tvImage.childImageSharp.fluid}
              />
            </div>
            <div align="center" className="mb-5">
              <div>
                <h4 className="p-5 mt-5 font-heading text-5xl sm:text-4xl lg:text-6xl text-white">
                  Learn Through <br></br>
                  Endutainment
                </h4>
              </div>
              <div className="text-white">Introduction To Corruption</div>
              <div className="text-white">Global Anti Corruption Efforts</div>
              <div className="text-white">
                Public And Private Sector Corruption
              </div>
              <div className="text-white">
                Abuse Of Gender and SocioEconomic Position
              </div>
              <div className="text-white">Behavior Ethics</div>
              <div className="text-white">Corruption Role of Technology</div>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden lg:hidden bg-format-background h-full w-full">
        <div className="flex flex-wrap flex-col  ">
          <div className="w-full mt-10 bg-format-primary">
            <div className="flex  pr-10 justify-center mb-4 ">
              <Img
                style={{ position: "" }}
                className="object-contain object-center w-40"
                fluid={bookImage.childImageSharp.fluid}
              />
            </div>
            <div align="center" className="flex flex-col text-white mb-3">
              <div className="text-2xl">
                <b>Traditional Learning</b>
              </div>
              <div>News Article</div>
              <div>Case Studies</div>
              <div>Research Projects</div>
            </div>
          </div>
          <div className="col-span-2 w-full mt-5 bg-format-primary">
            <div className="flex pl-20 pr-10 justify-center mb-4 ">
              <Img
                style={{ position: "" }}
                className="object-contain object-center w-40"
                fluid={tvImage.childImageSharp.fluid}
              />
            </div>
            <div align="center" className="text-white mb-3">
              <div className="text-2xl">
                <b>Learn Through Endutainment</b>
              </div>
              <div>Introduction To Corruption</div>
              <div>Global Anti Corruption Efforts</div>
              <div>Public And Private Sector Corruption</div>
              <div>Abuse Of Gender and SocioEconomic Position</div>
              <div>Behavior Ethics</div>
              <div>Corruption Role of Technology</div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-20 mt-10">
        <a href="/home" className="font-medium text-sm text-format-secondary">
          Browse Library
        </a>
      </div>
      <div className="relative  md:h-auto sm:h-120 h-120 w-full">
        <div className="flex flex-wrap lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-0">
          <div className="bg-format-background">
            <div className="mt-10 pl-20">
              <h2 className="text-heading-2 font-heading sm:pr-20">
                <span>Add Your Favorite Content</span>
              </h2>
              <div className="mt-10 sm:pr-20">
                Can’t find material you love in the Library? Or<br></br> maybe
                there’s not enough of your favorite. No problem.
              </div>
              <div className="mt-10">
                Contribute content to the Library, whether it&apos;s your
                creation or something you found on the internet. You’ll get
                points for your approved submission and help grow the Library.
              </div>
            </div>
          </div>
          <div className="hidden flex-wrap w-full h-150 md:block ml-10">
            <Img
              style={{ position: "relative" }}
              className="absolute object-cover w-full h-150"
              fluid={librarySketchImage.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
      <div className="pl-20">
        <button>
          <text className="text-format-secondary font-bold">
            &nbsp;&nbsp;Learn More -&gt;
          </text>
        </button>
      </div>
    </section>
  );
}
