import { Link } from "gatsby";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import urljoin from "url-join";
import WhiteArrow from "../../assets/right-down-white.svg";
import BlackArrow from "../../assets/right-down.svg";

function Volunteer() {
  const Jobs = [
    {
      title: "Fundraiser",
      detail:
        "The International Economic Justice League is seeking dynamic outgoing and passionate individuals for the role of a fundraiser. The position involves fundraising for IEJL a nonprofit organization tasked with the mission to abate corruption and promote ethical business practices.",
    },
    {
      title: "Online Presence Specialist",
      detail:
        "We are seeking a Volunteer Online Presence specialist who will be responsible for building and maintaining a positive online image for our company. You will be in charge of developing our website, expanding our social media presence, and maintaining our online platforms.",
    },
    {
      title: "Public Relations Specialist",
      detail:
        "We are seeking a Volunteer Public Relations specialist who will be responsible for building and maintaining a positive image for our company. You will be in charge of establishing and maintaining relationships with consumer, community, employee, and public interest groups.",
    },
    {
      title: "Business Relations Specialist",
      detail:
        "We are seeking a Volunteer Business Relations specialist who will be responsible for building and maintaining relationships with businesses for the purpose of identifying employers to post their job listings on IEJL's career website, participate our business affinity program, and provide sponsorship funding.",
    },
    {
      title: "Content Curator",
      detail:
        "We are seeking interns or volunteers, for our Content Curator position, who are driven and self-motivated, able to work independently and as a part of a team. They should have exceptional project management skills, a passion for the pop culture and current events, extremely positive attitudes, and should thrive in a dynamic environment.",
    },
    {
      title: "University/College Campus Relations Specialist",
      detail:
        "We are seeking a Volunteer University/College Campus Relations specialist who will be responsible for the recruitment and promotion of IEJL on university and college campuses. You will assist in the development and advisement of collegiate chapters in order to provide effective chapter management.",
    },
  ];

  const { volunteerImage, newsLetterImage } = useStaticQuery(graphql`
    query VolunteerPageQuery {
      volunteerImage: file(relativePath: { eq: "volunteer/hero-volunteer.png" }) {
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
            <div id="vertical-line" className="bg-format-secondary pb-0.5 h-64 w-1 absolute" />
            <text className="text-white font-heading text-heading-1">
              <span>Join our</span>
              <br></br>
              <span>volunteer</span>
              <br></br>
              <span>team</span>
            </text>
            
          </div>

          <Img
            style={{ position: "" }}
            className="absolute object-cover object-center w-full h-1/2 z-35"
            fluid={volunteerImage.childImageSharp.fluid}
          />
          <text className="flex flex-col justify-start space-y-10 items-start text-medium font-regular m-10 tracking-wide leading-7 ">
              Be at the forefront of an international initiative <br />
              and help us empower more individuals like you.
              Each year, we recognize reward our top
              volunteers at our Galas.
              Browse opportunities below.
            </text>
        </div>
        {/* xl headline  */}
        <div className="hidden md:flex bg-format-background justify-between items-start space-x-12 -mb-32 px-80 relative">
          <div className="w-full lg:w-6/12 xl:w-7/12 z-30">
            <Img
              style={{ position: "" }}
              className="relative object-cover object-center w-full sm:flex-grow xl:w-11/12"
              fluid={volunteerImage.childImageSharp.fluid}
            />
          </div>
          <div className="flex items-start xl:w-1/3 h-auto pt-20 lg:pt-48 xl:pt-82 md:space-x-5 ml-0 xl:ml-20 z-30">
            <div id="vertical-line" className="bg-format-secondary pb-0.5 h-36 lg:h-56 xl:h-64 w-1 absolute" />
            <div className="">
              <h3 className="font-heading text-heading-3 lg:text-heading-2 xl:text-heading-1 z-31">
                <span>Join our</span>
                <br></br>
                <span>volunteer</span>
                <br></br>
                <span>team</span>
              </h3>
              <text className="flex flex-col justify-center space-y-6 text-xs lg:text-medium xl:text-regular font-bolder mt-4 lg:mt-16 lg:leading-6 xl:leading-7 z-31">
                Be at the forefront of an international initiative <br />
                and help us empower more individuals like you.
                <br />
                Each year, we recognize reward our top
                <br />
                volunteers at our Galas.
                <br />
                Browse opportunities below.
              </text>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col lg:flex-row bg-format-primary h-auto lg:pt-28 xl:pt-44 justify-start z-9">
          <div className="relative lg:absolute mt-16 px-10 md:px-20 z-10">
            <p className="text-sm lg:text-bold text-white font-black uppercase">
              Newport Beach, CA
            </p>
            <p className="text-xs lg:text-regular font-thin tracking-wider text-white hidden md:block">
              33.6189&deg; N, 117.9298&deg;
            </p>
          </div>

          <div className="relative z-5">
            <div className="bg-gray-100 h-px bg-opacity-50 mx-10 lg:ml-96 lg:mr-20" />
            <div className="w-full">
              {Jobs.map((job, index) => (
                <div
                  key={index}
                  className={`${index < 3 ? "bg-format-primary" : "bg-format-background"
                    }`}
                >
                  <div className="px-10 lg:pr-80 lg:ml-96">
                    <div className="py-12 ">
                      <div className="flex flex-row justify-between items-start">
                        <p
                          className={`${index < 3
                            ? "text-3xl font-heading lg:text-heading-3 text-format-background"
                            : "text-3xl font-heading lg:text-heading-3 text-format-text"
                            }`}
                        >
                          {job.title}
                        </p>
                        <div>
                          <button>
                            <BlackArrow
                              className={`${index < 3
                                ? "hidden"
                                : "w-5 lg:w-10 h-auto ml-18"
                                }`}
                            />
                          </button>
                          <button>
                            <WhiteArrow
                              className={`${index < 3
                                ? "w-5 lg:w-10 h-auto ml-18"
                                : "hidden"
                                }`}
                            />
                          </button>
                        </div>
                      </div>
                      <p
                        className={`${index < 3
                          ? "text-white leading-7 text-medium lg:text-regular pr-16"
                          : "text-format-text leading-7 text-medium lg:text-regular pr-12"
                          }`}
                      >
                        {job.detail}
                      </p>
                    </div>
                    <div
                      className={`${index < 3
                        ? "bg-gray-100 h-px bg-opacity-50"
                        : "bg-gray-900 h-px"
                        }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-20 bg-format-background"></div>
      </div>
    </>
  );
}

export default Volunteer;
