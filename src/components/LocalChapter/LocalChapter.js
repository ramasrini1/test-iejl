import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";

export default function Sponsors() {
  const { localChapterHeaderImage } = useStaticQuery(graphql`
    query LocalChapterPageQuery {
      localChapterHeaderImage: file(relativePath: { eq: "localchapter/hero-local-chapter.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const perks = [
    {
      title: 'Socialize and network',
      description: 'Make friends and get to know like-minded individuals in your area.',
    },
    {
      title: 'Support each other',
      description: 'Share stories and support each other in anti-corruption efforts.',
    },
    {
      title: 'Earn points offline',
      description: 'Level up by attending non-web-based events and getting involved',
    },
  ];

  return (
    <section className="bg-format-background">
      <div className="relative h-screen">
        <Img
          style={{ position: "" }}
          className="object-contain object-center h-full"
          fluid={localChapterHeaderImage.childImageSharp.fluid}
        />
        <div className="absolute top-1/4 lg:ml-44 ml-4 mr-4 z-10 max-w-lg">
          <div className="border-l-4 border-format-secondary pl-10 lg:pt-5 lg:pb-5 sm:pt-4 sm:pb-4 pt-3 pb-3">
            <h3 className="font-heading lg:text-7xl sm:text-6xl text-5xl text-white">
              Find your<br/>local chapter
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-20 xl:ml-36 xl:mr-36 ml-4 mr-4">
        <text className="mb-20 max-w-4xl text-md sm:text-lg lg:text-xl text-black-hakkei">
          IEJL is working to establish Chapters in cities and universities around the 
          world to help build a wide-reacching culture of ethical commerce. Local 
          Chapters meet twice a month, giving Pledges a chance to:
        </text>
        <div className="flex flex-col lg:flex-row self-center gap-10 text-white">
          {perks.map(
            ({ title, description }, idx) => (
              <div key={idx} className="flex flex-col p-10 max-w-max sm:max-w-sm h-80 sm:h-110 bg-format-primary">
                <div className="text-xl text-format-secondary">
                  {"0" + (idx+1).toString()}
                </div>
                <h4 className="my-10 font-heading text-4xl lg:text-5xl">
                  {title}
                </h4>
                <text className="text-xl">
                  {description}
                </text>
              </div>
            )
          )}
        </div>
        <Link 
          to='/local-chapter'
          className="w-min whitespace-nowrap mt-20 mb-10 text-format-secondary font-semibold border-b-8 border-format-secondary hover:text-format-primary hover:border-format-primary no-underline tracking-wide"
        >
          Join a Local Chapter
        </Link>
      </div>
    </section>
  );
}