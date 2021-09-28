import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";

function Live() {
  const { LiveImage } = useStaticQuery(graphql`
    query LivePageQuery {
      LiveImage: file(relativePath: { eq: "IEJL-Live/hipstersenneagram.jpg" }) {
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
      {/* mobile headline */}
      <div className="flex flex-col bg-format-background">
        <div id="mobile-headline" className="relative md:hidden w-full">
          <div className="absolute flex flex-row space-x-10 px-3 py-32 z-40">
            <div>
              <h3 className="font-heading text-heading-2 pl-10 z-31 border-l-4 border-solid border-format-secondary text-white">
                Connect with a<br /> global community
                <br /> on IEJL Live!
              </h3>
            </div>
          </div>

          <Img
            style={{ position: "" }}
            className="absolute object-cover object-center w-full h-1/2 z-35"
            fluid={LiveImage.childImageSharp.fluid}
          />
        </div>
        {/* xl headline  */}
        <div className="hidden md:flex bg-format-background items-start space-x-10 -mb-32 px-80 relative">
          <div className="w-full sm:w-1/2 lg:w-6/12 xl:w-1/2 z-30 flex-none">
            <Img
              style={{ position: "" }}
              className="relative object-cover object-center w-full flex-grow"
              fluid={LiveImage.childImageSharp.fluid}
            />
          </div>
          <div className="flex flex-row items-start xl:w-3/5 h-auto pt-10 lg:pt-20 xl:pt-98 z-30">
            <div>
              <h3 className="font-heading text-heading-3 xl:text-heading-1 pl-10 z-31 border-l-4 border-solid border-format-secondary">
                Connect with a global community on IEJL Live!
              </h3>
            </div>
          </div>
        </div>
        {/* body  */}
        <div className="relative bg-format-primary md:pb-52 md:h-96 md:pt-52 md:px-10 z-9">
          <p className="font-heading text-heading-3 px-10 md:px-0 md:pl-10 pt-10 text-white md:w-2/3 h-full content-end">
            A secure, ad-free social
            <br /> network for IEJL Pledges
          </p>
        </div>
        <div className="flex flex-col h-full bg-format-background px-10 md:px-0 md:pl-20 pt-10 md:mt-20 md:mb-10 md:w-1/2">
          <p className="pb-12">
            IEJL Live! is an online social network designed to help Pledges stay
            in touch with local members as well as the global community. Make
            friends, share stories, participate in discussions, and play games
            to earn points.
          </p>
          <div className=" flex flex-row items-end space-x-20 mb-10">
            <button className=" bg-format-secondary h-12 w-28 text-white hover:bg-format-primary">
              Sign Up
            </button>
            <Link
              to="/"
              className="text-format-secondary font-semibold border-b-8 border-format-secondary hover:text-format-primary hover:border-format-primary no-underline tracking-wide"
            >
              Become a pledge
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Live;
