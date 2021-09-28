import { Link } from "gatsby";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export default function Connect() {
  const { 
    connectHeaderImage,
    connectMidImage,
    rewardOneImage,
    rewardTwoImage,
    rewardThreeImage,
    rewardFourImage,
  } = useStaticQuery(graphql`
    query ConnectPageQuery {
      connectHeaderImage: file(relativePath: { eq: "connect/hero-job-connect.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      connectMidImage: file(relativePath: { eq: "connect/mid-job-connect.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      rewardOneImage: file(relativePath: { eq: "connect/reward-one.png" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      rewardTwoImage: file(relativePath: { eq: "connect/reward-two.png" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      rewardThreeImage: file(relativePath: { eq: "connect/reward-three.png" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      rewardFourImage: file(relativePath: { eq: "connect/reward-four.png" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const perks = [
    {
      svg: rewardOneImage.childImageSharp.fluid,
      description: "Pledges earn points by participating in IEJL programs"
    },
    {
      svg: rewardTwoImage.childImageSharp.fluid,
      description: "Points increase their Award Level"
    },
    {
      svg: rewardThreeImage.childImageSharp.fluid,
      description: "Higher Award Levels increase Pledge visibility to employees"
    },
    {
      svg: rewardFourImage.childImageSharp.fluid,
      description: "Employers can use Award Level for hiring decisions"
    }
  ];

  return (
    <section className="bg-format-background">
      <div className="relative h-screen">
        <Img
          style={{ position: "" }}
          className="object-contain object-center h-full"
          fluid={connectHeaderImage.childImageSharp.fluid}
        />
        <div className="absolute top-1/4 ml-6 lg:ml-44 mr-6 z-10">
          <div className="border-l-4 border-format-secondary pl-10 py-3 sm:py-4 lg:py-5">
            <h3 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white">
              IEJL Job Connect
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="pt-20 pl-4 lg:pl-32 pr-4 lg:pr-32 xl:pr-0 w-full xl:w-1/2">
          <h4 className="p-2 font-heading text-5xl sm:text-6xl lg:text-7xl text-black-hakkei">
            Creating an
          </h4>
          <h4 className="p-2 w-min whitespace-nowrap bg-format-secondary font-heading text-5xl sm:text-6xl lg:text-7xl text-white">
            ethical culture
          </h4>
          <h4 className="p-2 font-heading text-5xl sm:text-6xl lg:text-7xl text-black-hakkei">
            in the workplace
          </h4>
          <div className="p-2">
            <text className="text-md sm:text-lg lg:text-xl text-black-hakkei">
              Job Connect brings together ethically conscious job seekers and
              employers to build a culture of ethical business practices.
            </text>
          </div>
        </div>
        <div className="relative pl-4 lg:pl-32 pr-4 lg:pl-32 pr-32 xl:pr-0 bg-format-primary">
          <div className="p-2 w-full xl:w-1/2">
            <text className="text-md sm:text-lg lg:text-xl text-white">
              IEJL Pledges are well-positioned to help improve or maintain a
              company&apos;s ethics, making them ideal candidates for businesses
              taking a stand against corruption.
            </text>
            <div className="flex gap-10 my-10 xl:my-40">
              <Link 
                to="/connect"
                className="w-min text-format-secondary font-semibold border-b-8 border-format-secondary hover:text-white hover:border-white no-underline tracking-wide whitespace-nowrap"
              >
                Employer Sign Up
              </Link>
              <Link 
                to="/connect"
                className="w-min text-format-secondary font-semibold border-b-8 border-format-secondary hover:text-white hover:border-white no-underline tracking-wide whitespace-nowrap"
              >
                Pledge Sign In
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 right-36 hidden xl:block">
            <Img
              style={{ position: "" }}
              className="object-contain object-center w-110"
              fluid={connectMidImage.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-20 pl-4 lg:pl-32 pr-4 lg:pr-32 w-full">
        <div className="p-2 w-full xl:w-1/2">
          <h4 className="mb-4 font-heading text-5xl sm:text-6xl lg:text-7xl text-black-hakkei">
            How Job Connect works
          </h4>
          <text className="text-md sm:text-lg lg:text-xl text-black-hakkei">
            Job Connect functions like many other job boards but incorporates the IEJL
            Award Level system. Higher Award Levels indicate more time spent growing
            ethical awareness.
          </text>
        </div>
        <div className="flex flex-wrap mx-0 gap-6 sm:gap-10 py-20 justify-center text-center text-white">
          {perks.map(
            ({ svg, description }, idx) => (
              <div key={idx} className="p-12 w-full sm:w-5/12 xl:w-1/3 2xl:w-1/5 bg-format-primary text-md sm:text-lg lg:text-xl">
                <div className="flex justify-center mb-4 w-full">
                  <Img
                    style={{ position: "" }}
                    className="object-contain object-center w-40"
                    fluid={svg}
                  />
                </div>
                {description}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
