import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";

function PledgeDiscounts() {
  const { discountsHero, discountsClientOne, discountsClientTwo, discountsClientThree, discountsEnd } = useStaticQuery(graphql`
    query PledgeDiscountsPageQuery {
      discountsHero: file(relativePath: { eq: "pledgediscounts/pledge-discounts-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      discountsClientOne: file(relativePath: { eq: "pledgediscounts/client-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      discountsClientTwo: file(relativePath: { eq: "pledgediscounts/client-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      discountsClientThree: file(relativePath: { eq: "pledgediscounts/client-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      discountsEnd: file(relativePath: { eq: "pledgediscounts/pledge-discounts-end.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const modules = [
    {
      heading: 'Earn points by getting involved',
      image: discountsClientOne
    },
    {
      heading: 'Increase your Award Level',
      image: discountsClientTwo
    },
    {
      heading: 'Unlock bigger discounts',
      image: discountsClientThree
    },
  ];

  return (
    <section>
      <div className="relative h-screen">
        <Img
          style={{ position: "" }}
          className="object-contain object-center h-full"
          fluid={discountsHero.childImageSharp.fluid}
        />
        <div className="absolute top-1/4 ml-6 lg:ml-44 mr-6 z-10 max-w-xl">
          <div className="border-l-4 border-format-secondary pl-10 py-3 sm:py-4 lg:py-5">
            <h3 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white">
              Save on ethical brands and services
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-8 lg:mb-110 pt-20 pl-8 xl:pl-20">
        <h3 className="mb-12 font-heading text-5xl sm:text-6xl lg:text-7xl">
          How it works
        </h3>
        <div className="flex flex-col md:flex-row justify-end bg-format-primary ml-0 xl:ml-52 2xl:ml-110 pb-4 lg:pb-0">
          {modules.map(({ heading, image }, idx) =>
            <div key={idx} className="flex flex-col lg:relative">
              <div className="md:max-w-xs pt-12 md:pt-20 pb-8 md:pb-20 xl:pb-52 px-8 flex-grow">
                <text className="text-lg text-format-secondary">
                  0{idx+1}
                </text>
                <h4 className="mt-6 font-heading text-4xl lg:text-5xl text-white">
                  {heading}
                </h4>
              </div>
              <div className="lg:absolute top-80 w-60 lg:w-72 xl:w-screen max-w-xs self-center">
                <Img
                  style={{ position: "" }}
                  className="object-contain object-center h-full"
                  fluid={image.childImageSharp.fluid}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col xl:flex-row p-8 xl:p-20 gap-12 xl:gap-40">
        <div>
          <h3 className="font-heading text-5xl sm:text-6xl lg:text-7xl">
            How to find merchants
          </h3>
          <div className="max-w-2xl">
            <text>
              Search for ethical brands based on location and category.
              You must sign in to browse participating merchants.
            </text>
          </div>
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 mt-20">
            <Link to="/login" className="w-min whitespace-nowrap">
              <button className="bg-format-secondary text-white px-12 py-2 hover:bg-format-primary transition-colors duration-200">
                Sign In
              </button>
            </Link>
            <div>
              <Link 
                to="/become-a-pledge"
                className="w-min mb-12 text-format-secondary font-semibold border-b-8 border-format-secondary hover:text-format-primary hover:border-format-primary no-underline tracking-wide"
              >
                Become a Pledge
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-screen max-w-lg">
          <Img
            style={{ position: "" }}
            className="object-contain object-center h-full"
            fluid={discountsEnd.childImageSharp.fluid}
          />
        </div>
      </div>
    </section>
  );
}

export default PledgeDiscounts;
